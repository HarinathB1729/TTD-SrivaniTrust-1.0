import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DOMPurify from "dompurify";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { newUserApiCall } from "../api";
import { useAuth } from "./AuthProvider";

const textBoxStyles = {
  backgroundColor: "white",
  width: "100%",
  marginBottom: "10px",
};

function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,20}$/;
  return regex.test(password);
}

function NewUser() {
  const { isAuthenticated } = useAuth();
  const token = isAuthenticated.token;

  const [usernameError, setUsernameError] = useState({
    error: false,
    message: "",
  });
  const [emailError, setEmailError] = useState({
    error: false,
    message: "",
  });
  const newUser_init_values = {
    email: "",
    username: "",
    role: "",
    password: "",
    phoneno: "",
  };
  const [newUser, setNewUser] = useState(newUser_init_values);
  const [pwdErr, setPwdErr] = useState(false);
  const [cnfPwd, setCnfPwd] = useState("");
  const navigate = useNavigate();

  const clearDataHandler = (e) => {
    e.preventDefault();
    setNewUser(newUser_init_values);
    setEmailError({
      error: false,
      message: "",
    });
    setUsernameError({
      error: false,
      message: "",
    });
  };

  const checkingValidation = (password) => {
    if (validatePassword(password)) setPwdErr(false);
    else setPwdErr(true);
  };

  const dataHandler = (e) => {
    if (e.target.name === "password") {
      checkingValidation(e.target.value);
    }
    if (e.target.name === "phoneno") {
      if (isNaN(e.target.value)) return;
    }

    setEmailError({
      error: false,
      message: "",
    });

    setUsernameError({
      error: false,
      message: "",
    });

    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    setNewUser((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    newUserApiCall(newUser, token)
      .then((data) => {
        // console.log("response", res);
        window.alert(data["message"]);
        navigate("/auth/users");
      })
      .catch((err) => {
        // console.log("Error :", err);
        if (err.response.status === 401) navigate("/");
        if (err.response.data.email)
          setEmailError({
            error: true,
            message: err.response.data.email[0],
          });
        if (err.response.data.username)
          setUsernameError({
            error: true,
            message: err.response.data.username[0],
          });

        if (err.response.status === 401) navigate("/");
      });
    setNewUser((prev) => ({ ...prev, password: "" }));
    setCnfPwd("");
  };
  // console.log("newuser", newUser);
  // console.log("cnfpwd", cnfPwd);

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>New User</h2>
      </div>
      <Container sx={{ width: "65vw", minHeight: "58vh" }}>
        <form onSubmit={formSubmitHandler} autoComplete="off">
          <Grid
            style={{ border: "1px solid grey", width: "98%", margin: "10px" }}
            container
          >
            <Grid item xs={6}>
              <Box style={{ textAlign: "left", padding: "10px 20px" }}>
                <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="username"
                  placeholder="User name"
                  variant="outlined"
                  label="Username"
                  onChange={dataHandler}
                  value={newUser?.username}
                  error={usernameError.error}
                />
                <br />
                {usernameError.error && (
                  <Typography sx={{ color: "red", fontSize: "0.8em" }}>
                    {usernameError.message}
                  </Typography>
                )}

                <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="password"
                  type="password"
                  placeholder="Password"
                  variant="outlined"
                  label="Password"
                  onChange={dataHandler}
                  value={newUser?.password}
                />
                <br />
                {pwdErr && (
                  <Typography
                    sx={{ textAlign: "left", color: "red", fontSize: "0.8em" }}
                  >
                    Password didn't meet the requirements.
                  </Typography>
                )}

                <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="phoneno"
                  placeholder="Phone Number"
                  variant="outlined"
                  label="Phone Number"
                  onChange={dataHandler}
                  value={newUser?.phoneno}
                  inputProps={{ maxLength: 10 }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box style={{ textAlign: "left", padding: "10px 20px" }}>
                <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="email"
                  type="email"
                  value={newUser?.email}
                  placeholder="Email *"
                  label="Email"
                  variant="outlined"
                  onChange={dataHandler}
                />
                <br />
                {emailError.error && (
                  <Typography sx={{ color: "red", fontSize: "0.8em" }}>
                    {emailError.message}
                  </Typography>
                )}
                <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="cnfpwd"
                  type="password"
                  label="Confirm Password"
                  value={cnfPwd}
                  onChange={(e) => {
                    setCnfPwd(e.target.value);
                  }}
                  placeholder="Confirm Password"
                  error={cnfPwd !== newUser.password}
                />
                <br />
                {cnfPwd !== newUser.password && (
                  <Typography
                    sx={{ textAlign: "left", color: "red", fontSize: "0.8em" }}
                  >
                    Passwords don't match
                  </Typography>
                )}
                <br />
                <TextField
                  style={textBoxStyles}
                  name="role"
                  value={newUser?.role}
                  variant="outlined"
                  select
                  label="Role"
                  onChange={dataHandler}
                  defaultValue={"User"}
                >
                  <MenuItem value={"user"}>user</MenuItem>
                  <MenuItem value={"admin"}>admin</MenuItem>
                </TextField>
              </Box>
            </Grid>
            <br />
            <br />
            <Grid
              item
              xs={12}
              className="center"
              style={{ margin: "20px", gap: "50px" }}
            >
              <Button
                style={{ width: "200px" }}
                variant="contained"
                type="submit"
                disabled={
                  !newUser.email ||
                  !newUser.password ||
                  !newUser.phoneno ||
                  !newUser.username ||
                  !newUser.role ||
                  !cnfPwd ||
                  newUser.password !== cnfPwd
                }
              >
                Create User
              </Button>

              <Button
                style={{ width: "200px" }}
                variant="contained"
                color="error"
                onClick={clearDataHandler}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default NewUser;
