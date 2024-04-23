import { Container, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "./AuthProvider";

function Profile() {
  const { isAuthenticated } = useAuth();
  const token = isAuthenticated["token"];
  const [edit, setEdit] = useState(true);
  const [changeInData, setChangeInData] = useState(false);
  const navigate = useNavigate();

  const profile_init_values = {
    username: isAuthenticated["username"],
    email: isAuthenticated["email"],
    role: isAuthenticated["role"],
  };
  const [profileData, setProfileData] = useState(profile_init_values);
  const [usernameError, setUsernameError] = useState({
    error: false,
    message: "",
  });

  const profileDataHandler = (e) => {
    setProfileData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setChangeInData(true);
  };

  const clearDataHandler = () => {
    setProfileData(profile_init_values);
    setChangeInData(false);
    setEdit(true);
    setUsernameError({
      error: false,
      message: "",
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    api
      .patch("users/usernameupdate/", profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("response", res);
        window.alert(res.data["message"]);
        navigate("/");
      })
      .catch((err) => {
        // console.log("Error :", err);
        setChangeInData(false);
        if (err.response.data.username)
          setUsernameError({
            error: true,
            message: err.response.data.username[0],
          });

        if (err.response.data.error)
          setUsernameError({
            error: true,
            message: err.response.data.error,
          });
      });
  };

  // console.log("profiledata", profileData);

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>
          {edit ? "User Profile" : "Update Username"}
        </h2>
      </div>
      <Container
        sx={{
          padding: "45px !important",
          width: "32vw",
          border: "1px solid black",
          minHeight: "58vh",
        }}
      >
        <form onSubmit={formSubmitHandler} autoComplete="off">
          <TextField
            sx={{ margin: "20px 0" }}
            required
            fullWidth
            name="email"
            type="email"
            value={profileData?.email}
            placeholder="Email *"
            label="Email"
            variant="outlined"
            onChange={profileDataHandler}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            sx={{ margin: "20px 0" }}
            required={true}
            fullWidth
            label="Username"
            name="username"
            placeholder="Enter Your Username"
            type="text"
            value={profileData?.username}
            InputProps={{
              readOnly: edit,
            }}
            onChange={profileDataHandler}
            error={usernameError?.error}
          />
          {usernameError.error && (
            <Typography
              sx={{ color: "red", fontSize: "0.8em", textAlign: "left" }}
            >
              {usernameError.message}
            </Typography>
          )}

          <TextField
            name="role"
            variant="outlined"
            label="Role"
            sx={{ margin: "20px 0" }}
            fullWidth
            required={true}
            onChange={profileDataHandler}
            value={profileData?.role}
            placeholder="New Role"
            InputProps={{
              readOnly: true,
            }}
          />
          {edit && (
            <Button
              sx={{ textTransform: "none", margin: "20px 0" }}
              fullWidth
              size="medium"
              variant="contained"
              onClick={() => setEdit(false)}
            >
              Edit Username
            </Button>
          )}
          {!edit && (
            <div style={{ display: "flex" }}>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: "50%",
                  margin: "20px 10px 20px 0px",
                }}
                disabled={!changeInData}
              >
                Update Username
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="error"
                sx={{
                  textTransform: "none",
                  width: "50%",
                  margin: "20px 0px 20px 10px",
                }}
                onClick={clearDataHandler}
              >
                Cancel
              </Button>
            </div>
          )}
        </form>
      </Container>
    </>
  );
}

export default Profile;
