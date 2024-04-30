import React from "react";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {" ©"}
      {new Date().getFullYear()}
      {" TTD - SRIVANI TRUST, Contact for Technical Support "}
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
        href="https://www.exafluence.com/"
      >
        Exafluence
      </a>{" "}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <div
      style={{
        borderTop: "5px solid #7C0A02",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
      }}
    >
      <b>
        <Copyright sx={{ mt: 2 }} />
      </b>
    </div>
  );
}

export default Footer;
