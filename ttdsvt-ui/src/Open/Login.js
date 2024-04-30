import React from "react";
import gold from "../Images/gold.jpg";
import gopuram from "../Images/gopuram.jpg";
import Container from "@mui/material/Container";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

function Login() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${gold})`, // Use backticks and interpolation to include the image URL
          height: "100vh",
          backgroundSize: "cover", // Optional: Adjust to your desired size
          backgroundRepeat: "no-repeat", // Optional: Adjust as needed}}}>
        }}
      >
        <h1 style={{ color: "#7C0A02", marginTop: 0, textAlign: "left" }}>
          Srivani Trust
        </h1>
        <Container
          maxWidth="xl"
          sx={{
            borderRadius: "20px",
            marginTop: "50px",
            padding: "0 !important",
            width: "45vw",
            height: "70vh",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "40%",
              backgroundImage: `url(${gopuram})`, // Use backticks and interpolation to include the image URL
              borderRadius: "20px 0 0 20px",
              backgroundSize: "cover", // Optional: Adjust to your desired size
              backgroundRepeat: "no-repeat", // Optional: Adjust as needed}}}>
            }}
          ></div>
          <LoginForm />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Login;
