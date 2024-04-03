import { Box, Container, FormControl, InputLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

const textBoxStyles = { backgroundColor:'white', width: "100%", marginBottom: "10px" }

function NewUser() {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const newUser_init_values = {
    email: "",
    username: "",
    role: "",
    password: "",
    phoneno: "",
  };
  const [newUser, setNewUser] = useState(newUser_init_values);
  const [cnfPwd, setCnfPwd] = useState("");

  const clearDataHandler = (e) => {
    e.preventDefault();
    setNewUser(newUser_init_values);
  };

  const dataHandler = (e) => {
    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    setNewUser((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  //   console.log("newuser",newUser)

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>New User</h2>
      </div>
      <Container sx={{ width: "65vw", minHeight: "58vh" }}>
        <form onSubmit={formSubmitHandler} autoComplete="off">
          <Grid style={{ border:'1px solid grey', width: "98%", margin: "10px" }} container>
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
                  inputProps={{ maxLength: 7 }}
                  error={error}
                />
                {error && (
                  <Typography sx={{ color: "red", fontSize: "0.8em" }}>
                    {errMsg}
                  </Typography>
                )}
                <br />
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
                  inputProps={{ maxLength: 7 }}
                  error={error}
                />
                <br />

                <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="phoneno"
                  placeholder="Phone Number"
                  variant="outlined"
                  label="Phone Number"
                  //   type="number"
                  onChange={dataHandler}
                  value={newUser?.phoneno}
                  inputProps={{ maxLength: 10 }}
                  error={error}
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
                <br /> <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="cnfpwd"
                  type="password"
                  label="Confirm Password"
                  onChange={(e) => {
                    setCnfPwd(e.target.value);
                  }}
                  placeholder="Confirm Password"
                  error={cnfPwd !== newUser.password}
                />
                {cnfPwd !== newUser.password && (
                  <Typography
                    sx={{ float: "left", color: "red" }}
                    fontSize={13}
                    gutterBottom
                  >
                    Passwords don't match
                  </Typography>
                )}
                <br />
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
                  <MenuItem value={"User"}>User</MenuItem>
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                </TextField>
              </Box>
            </Grid>
            <br />
            <br />
            <Grid
              xs={12}
              className="center"
              style={{ margin: "20px", gap: "50px" }}
            >
              <Button
                style={{ width: "100px" }}
                variant="contained"
                type="submit"
              >
                Update
              </Button>

              <Button
                style={{ width: "100px" }}
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
