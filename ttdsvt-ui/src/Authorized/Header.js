import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import TTDLogo from "../Images/TTDLogo.png";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "./AuthProvider";

function Header() {
  const { setIsAuthenticated } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [activeButton, setActiveButton] = useState(0);

  const btnStyles = {
    backgroundColor: "#B31B1B",
    textTransform: "none",
    color: "#FFC72C",
    border: "2px solid transparent", // initially, no border
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const logoutHandler = () => {
    // console.log("logout handler");
    setIsAuthenticated({
      token: false,
    });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0px !important",
        // border: "1px solid black",
        height: "15vh",
        display: "flex",
        backgroundColor: "#B31B1B",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottom: "5px solid #FFC72C",
      }}
    >
      <Box className="center" style={{ width: "10%", height: "100%" }}>
        <NavLink to="/auth/" onClick={() => handleButtonClick(0)}>
          <img
            style={{ width: "70%", height: "80%" }}
            src={TTDLogo}
            alt="ttd logo"
          />
        </NavLink>
      </Box>
      <Box sx={{ width: "80%", display: "flex", gap: "50px" }}>
        <NavLink to="/auth/bhajanamandiralu">
          <Button
            style={
              activeButton === 1
                ? {
                    ...btnStyles,
                    border: "1px solid #FFC72C",
                    color: "white",
                    fontWeight: "bold",
                  }
                : btnStyles
            }
            variant="contained"
            onClick={() => handleButtonClick(1)}
          >
            Bhajana Mandiralu
          </Button>
        </NavLink>
        <NavLink to="/auth/users">
          <Button
            style={
              activeButton === 2
                ? {
                    ...btnStyles,
                    border: "1px solid #FFC72C",
                    color: "white",
                    fontWeight: "bold",
                  }
                : btnStyles
            }
            variant="contained"
            onClick={() => handleButtonClick(2)}
          >
            Users
          </Button>
        </NavLink>
        <NavLink to="/auth/reports">
          <Button
            style={
              activeButton === 3
                ? {
                    ...btnStyles,
                    border: "1px solid #FFC72C",
                    color: "white",
                    fontWeight: "bold",
                  }
                : btnStyles
            }
            variant="contained"
            onClick={() => handleButtonClick(3)}
          >
            Reports
          </Button>
        </NavLink>
      </Box>
      <Box
        sx={{
          //   border: "1px solid yellow",
          width: "10%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <AccountCircleIcon
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ fill: "white" }}
        />
        {/* </NavLink> */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{
            vertical: "top",
            horizontal: "left", // Align the menu to the left
          }}
        >
          <NavLink
            style={{ textDecoration: "none" }}
            to="/auth/profile"
            onClick={() => handleButtonClick(0)}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/auth/changepwd"
            onClick={() => handleButtonClick(0)}
          >
            <MenuItem onClick={handleClose}>Change Password</MenuItem>
          </NavLink>
        </Menu>
        <NavLink to="/">
          <LogoutIcon onClick={logoutHandler} style={{ fill: "black" }} />
        </NavLink>
      </Box>
    </Container>
  );
}

export default Header;
