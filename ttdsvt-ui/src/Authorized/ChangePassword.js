import { TextField, Container, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import DOMPurify from "dompurify";
import { changePasswordApiCall } from "../api";

function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,20}$/;
  return regex.test(password);
}

function ChangePassword() {
  const [pwdErr, setPwdErr] = useState(false);
  const [cnfPwd, setCnfPwd] = useState("");
  const { isAuthenticated } = useAuth();
  const token = isAuthenticated.token;
  const [userCredentials, setUserCredentials] = useState({
    email: isAuthenticated["email"],
    password: "",
  });
  const navigate = useNavigate();

  const checkingValidation = (password) => {
    if (validatePassword(password)) setPwdErr(false);
    else setPwdErr(true);
  };

  const changePwdHandler = (e) => {
    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    setUserCredentials((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
    checkingValidation(sanitized_value);
  };

  const confirmPwdHandler = (e) => {
    setCnfPwd(e.target.value);
  };

  const formDataHandler = (e) => {
    e.preventDefault();

    changePasswordApiCall(userCredentials, token)
      .then((data) => {
        console.log("response", data);
        window.alert(data["message"]);
        navigate("/auth/");
      })
      .catch((err) => {
        if (err.response.status === 401) navigate("/");
        console.log("Error :", err);
      });
  };

  // console.log("userCredentials", userCredentials);
  // console.log("cnfpwd", cnfPwd);

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>Change Password</h2>
      </div>
      <Container
        sx={{
          padding: "45px !important",
          width: "30vw",
          border: "1px solid grey",
          minHeight: "58vh",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", textAlign: "justify", fontSize: "0.8em" }}
        >
          Requirement: Password must be with 8-20 characters, with atleast one
          lowercase letter, one uppercase letter, one number, and one special
          character from !@#$%^&*()_+
          {};':"|,./?.
        </Typography>
        <form onSubmit={formDataHandler} autoComplete="off">
          <TextField
            sx={{ margin: "30px 0 0 0" }}
            required={true}
            fullWidth
            label="New Password"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            onChange={changePwdHandler}
            error={pwdErr}
          />
          {pwdErr && (
            <Typography
              sx={{ textAlign: "left", color: "red", fontSize: "0.8em" }}
            >
              Password didn't meet the requirements.
            </Typography>
          )}

          <TextField
            sx={{ margin: "20px 0 0 0" }}
            fullWidth
            required={true}
            name="cnfpwd"
            label="Confirm New Password"
            type="password"
            autoComplete="off"
            onChange={confirmPwdHandler}
            placeholder="Confirm Password"
            error={userCredentials.password !== cnfPwd}
          />
          {userCredentials.password !== cnfPwd && (
            <Typography
              sx={{ float: "center", color: "red", marginBottom: "20px" }}
              fontSize={13}
            >
              Passwords Didn't Match
            </Typography>
          )}
          <Button
            sx={{ textTransform: "none", margin: "20px 0" }}
            fullWidth
            size="medium"
            variant="contained"
            type="submit"
            disabled={
              !userCredentials.password ||
              !cnfPwd ||
              userCredentials.password !== cnfPwd ||
              pwdErr
            }
          >
            Update Password
          </Button>
        </form>
      </Container>
    </>
  );
}

export default ChangePassword;
