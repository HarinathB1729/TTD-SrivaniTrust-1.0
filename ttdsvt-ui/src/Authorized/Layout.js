import React from "react";
import whiteBckgrnd from "../Images/white.jpg";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Public/Footer";
import { Container } from "@mui/material";

function Layout() {
  return (
    <div>
      <Header />
      <Container maxWidth={false} style={{ padding:'0px !important', backgroundImage: `url(${whiteBckgrnd})` }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
