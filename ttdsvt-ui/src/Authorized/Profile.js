import { Container, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function Profile() {
  const [edit, setEdit] = useState(true);
  const [errMsg, setErrMsg] = useState(false);
  const [error, setError] = useState(false);
  const [err, setErr] = useState(false);
  const [changeInData, setChangeInData]= useState(false);

  const profile_init_values = {
    username: "abc",
    role: "role",
  };
  const [profileData, setProfileData] = useState(profile_init_values);

  const profileDataHandler = (e) => {
    setProfileData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setChangeInData(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  console.log("profiledata", profileData);
  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>Profile</h2>
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
            error={error}
          />
          <TextField
            sx={{ margin: "20px 0" }}
            fullWidth
            required={true}
            name="role"
            label="Role"
            onChange={profileDataHandler}
            value={profileData?.role}
            placeholder="Your Role"
            InputProps={{
              readOnly: true,
            }}
            error={err}
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
                onClick={() => {
                  setProfileData(profile_init_values);
                  setChangeInData(false);
                  setEdit(true);
                }}
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
