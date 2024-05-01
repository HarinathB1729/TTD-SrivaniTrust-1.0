import React, { useEffect } from "react";
import whiteBckgrnd from "../Images/white.jpg";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Open/Footer";
import { Container } from "@mui/material";

function Layout() {
  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault(); // Prevent default behavior
      window.history.forward(); // Forward the user to the same page
    };

    window.history.pushState(null, "", window.location.pathname); // Add initial state to history
    window.addEventListener("popstate", handleBackButton); // Listen for the back button event

    return () => {
      // Cleanup function
      window.removeEventListener("popstate", handleBackButton); // Remove event listener
    };
  }, []); // Run this effect only once after component mounts

  return (
    <div>
      <Header />
      <Container
        maxWidth={false}
        style={{
          padding: "0px !important",
          backgroundImage: `url(${whiteBckgrnd})`,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
