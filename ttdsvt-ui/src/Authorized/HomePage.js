import { Container } from "@mui/material";
import React from "react";

function HomePage() {
  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>TTD Srivani Trust</h2>
      </div>
      <Container sx={{ border: "1px solid black", minHeight:'58vh' }}>Information about Srivani Trust</Container>
    </>
  );
}

export default HomePage;
