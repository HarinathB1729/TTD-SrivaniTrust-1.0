import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import ReplayIcon from "@mui/icons-material/Replay";
import { Button } from "@mui/material";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authorized/AuthProvider";
import { loginAuthenticationApiCall } from "../api";

function LoginForm() {
  const [errMsg, setErrMsg] = useState(false);
  const [captchaVal, setCaptchaVal] = useState("");
  const loginData_init_values = {
    username: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginData_init_values);
  const [userCaptchaValue, setUserCaptchaValue] = useState("");

  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  useEffect(() => {
    setLoginData(loginData_init_values);
    captchaGenerator();
    setUserCaptchaValue("");
  }, []);

  const btnStyles = {
    width: "120px",
    borderRadius: "15px",
    backgroundColor: "#7C0A02",
  };

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const captchaGenerator = () => {
    let txt = "0123456789";
    let capval = "";
    let char = "";

    for (let i = 0; i < 7; i++) {
      char = txt.charAt(getRandomNumber(0, txt.length));
      // console.log("char",char)
      capval += char;
      if (capval.length === 5) break;
    }
    // console.log("captcha generated :" + capval);
    setCaptchaVal(capval);
  };

  const captchaDataHandler = (event) => {
    setUserCaptchaValue(event.target.value);
  };

  const loginDataHandler = (e) => {
    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    setLoginData((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
  };

  const clearDataHandler = () => {
    setLoginData(loginData_init_values);
    setUserCaptchaValue("");
  };

  const formDataHandler = (e) => {
    e.preventDefault();

    loginAuthenticationApiCall(loginData)
      .then((data) => {
        // console.log("response", data);

        setIsAuthenticated({
          token: data["access_token"],
          email: data["email"],
          username: data["username"],
          role: data["role"],
          expires_at: data["expires_at"],
        });
        navigate("/auth/");
      })
      .catch((err) => {
        console.log("Error :", err);
        setErrMsg(err.response.data["detail"]);
      });
  };
  // console.log("logindata", loginData);
  // console.log("capval", captchaVal);
  // console.log("usercapval", userCaptchaValue);

  return (
    <div
      style={{
        width: "60%",
        backgroundColor: "white",
        borderRadius: "0 20px 20px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container>
        <h2 style={{ color: "#7C0A02" }}>Login</h2>
        <form name="login_form" onSubmit={formDataHandler} autoComplete="off">
          <TextField
            sx={{ margin: "10px 0" }}
            required={true}
            fullWidth
            label="Username"
            name="username"
            placeholder="Enter Your Username"
            type="text"
            onChange={loginDataHandler}
            value={loginData?.username}
          />
          <TextField
            sx={{ margin: "10px 0" }}
            fullWidth
            required={true}
            name="password"
            label="Password"
            type="password"
            onChange={loginDataHandler}
            placeholder="Enter Your Password"
            value={loginData?.password}
          />

          <div
            style={{
              margin: "10px 0",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div>
              <TextField
                fullWidth
                label="Captcha"
                value={captchaVal}
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  },
                }}
              />
            </div>

            <ReplayIcon
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "15px",
              }}
              onClick={captchaGenerator}
            />
            <TextField
              fullWidth
              required={true}
              name="captcha"
              label="Enter Captcha"
              type="text"
              onChange={captchaDataHandler}
              value={userCaptchaValue}
              placeholder="Captcha Value"
            />
          </div>

          {errMsg && (
            <Typography sx={{ color: "red" }} fontSize={13}>
              {errMsg}
            </Typography>
          )}

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              type="submit"
              style={btnStyles}
              variant="contained"
              disabled={
                !loginData.username ||
                !loginData.password ||
                !userCaptchaValue ||
                userCaptchaValue !== captchaVal
              }
            >
              submit
            </Button>
            <Button
              style={btnStyles}
              variant="contained"
              onClick={clearDataHandler}
            >
              clear
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default LoginForm;
