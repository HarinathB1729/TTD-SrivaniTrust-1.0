import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import ReplayIcon from "@mui/icons-material/Replay";
import { Button } from "@mui/material";

function LoginForm() {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [captchaVal, setCaptchaVal] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  useEffect(() => {
    captchaGenerator();
  }, []);

  const btnStyles = {
    width:'120px', borderRadius:'15px', backgroundColor:'#7C0A02'
  }


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
      if (capval.length == 5) break;
    }
    // console.log("captcha generated :" + capval);
    setCaptchaVal(capval);
  };

  const captchaDataHandler = (event) => {
    setUserCaptcha(event.target.value);
  };

  const loginDataHandler = () => {};
  const formDataHandler = () => {};

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
        <h2 style={{ color: "#7C0A02"}}>Login</h2>
        <form onSubmit={formDataHandler} autoComplete="off">
          <TextField
          sx={{ margin: "20px 0" }}
            required={true}
            fullWidth
            label="Username"
            name="username"
            placeholder="Enter Your Username"
            type="text"
            onChange={loginDataHandler}
            error={error}
          />
          <TextField
            sx={{ margin: "20px 0" }}
            fullWidth
            required={true}
            name="password"
            label="Password"
            type="password"
            onChange={loginDataHandler}
            placeholder="Enter Your Password"
            error={error}
          />
          {error && (
            <Typography
              sx={{ float: "left", color: "red", marginBottom: "20px" }}
              fontSize={13}
            >
              {errMsg}
            </Typography>
          )}
          <div
            style={{ margin:'20px 0', display: "flex", width: "100%", justifyContent: "center" }}
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
                margin: "20px",
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
              placeholder="Captcha Value"
              error={error}
            />
          </div>
          <div style={{ marginTop: "50px", display:'flex', justifyContent:'space-evenly' }}>
            <Button style={btnStyles} variant="contained">submit</Button>
            <Button style={btnStyles} variant="contained">clear</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default LoginForm;
