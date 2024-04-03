import { TextField, Container, Typography, Button } from "@mui/material";
import React, { useState } from "react";

function ChangePassword() {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const loginDataHandler = () => {};
  const formDataHandler = () => {};

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>Change Password</h2>
      </div>
      <Container
        sx={{ padding:'45px !important', width: "30vw", border: "1px solid grey", minHeight: "58vh" }}
      >
        <form onSubmit={formDataHandler} autoComplete="off">
          <TextField
            sx={{ margin: "20px 0" }}
            required={true}
            fullWidth
            label="New Password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={loginDataHandler}
            error={error}
          />
          <TextField
            sx={{ margin: "20px 0" }}
            fullWidth
            required={true}
            name="cnfpwd"
            label="Confirm New Password"
            type="password"
            onChange={loginDataHandler}
            placeholder="Confirm Password"
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
          <Button
            sx={{ textTransform: "none", margin: "20px 0" }}
            fullWidth
            size="medium"
            variant="contained"
            type="submit"
            disabled={!error}
          >
            Update Password
          </Button>
        </form>
      </Container>
    </>
  );
}

export default ChangePassword;
