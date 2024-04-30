import { Box, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { fetchUserApiCall, updateUserApiCall } from "../api";
import { useAuth } from "./AuthProvider";

const textBoxStyles = {
  backgroundColor: "white",
  width: "100%",
  marginBottom: "10px",
};

function UpdateUser(props) {
  const {isAuthenticated} = useAuth();
  const [newUser, setNewUser] = useState({
    email: "",
    phoneno: "",
    role: "",
    username: "",
  });
  let location = useLocation();
  const navigate = useNavigate();
  const [changeInData, setChangeInData] = useState(false);
  const name = location.search.slice(1);
  // console.log("name",name)

  useEffect(() => {
    
    const fetchUserData = async () => {
      fetchUserApiCall(name,isAuthenticated.token)
        .then((data) => {
            // console.log("response", data);
          setNewUser(data);
        })
        .catch((err) => {
          if(err.response.status==401) navigate("/")
          console.log("Error :", err);
        });
    };
    fetchUserData();
  }, [name]);

  const dataHandler = (e) => {
    if (e.target.name === "phoneno") {
      if (isNaN(e.target.value)) return;
    }

    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    setNewUser((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
    setChangeInData(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    updateUserApiCall(newUser,props.token)
      .then((data) => {
        // console.log("response", res);
        window.alert(data["message"]);
        navigate("/auth/users");
      })
      .catch((err) => {
        if(err.response.status==401) navigate("/")
        console.log("Error :", err);
      });
  };
  // console.log("newuser", newUser);
  //   console.log("location props", location.search.slice(1,));

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>Update User</h2>
      </div>
      <Container sx={{ width: "65vw", minHeight: "58vh" }}>
        <form onSubmit={formSubmitHandler} autoComplete="off">
          <Grid
            style={{ border: "1px solid grey", width: "98%", margin: "10px" }}
            container
          >
            <Grid item xs={6}>
              <Box style={{ textAlign: "left", padding: "10px 20px" }}>
                <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="username"
                  placeholder="User name"
                  variant="outlined"
                  label="Username"
                  onChange={dataHandler}
                  value={newUser?.username}
                  InputProps={{
                    readOnly: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />

                <br />

                <TextField
                  style={textBoxStyles}
                  required
                  name="phoneno"
                  placeholder="Phone Number"
                  variant="outlined"
                  label="Phone Number"
                  onChange={dataHandler}
                  value={newUser?.phoneno}
                  inputProps={{ maxLength: 10 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box style={{ textAlign: "left", padding: "10px 20px" }}>
                <br />
                <TextField
                  style={textBoxStyles}
                  required
                  name="email"
                  type="email"
                  value={newUser?.email}
                  placeholder="Email *"
                  label="Email"
                  variant="outlined"
                  onChange={dataHandler}
                  InputProps={{
                    readOnly: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />

                <br />

                <TextField
                  style={textBoxStyles}
                  name="role"
                  value={newUser?.role || ""}
                  variant="outlined"
                  select
                  label="Role"
                  onChange={dataHandler}
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  <MenuItem value={"user"}>user</MenuItem>
                  <MenuItem value={"admin"}>admin</MenuItem>
                </TextField>
              </Box>
            </Grid>
            <br />
            <br />
            <Grid
              item
              xs={12}
              className="center"
              style={{ margin: "20px", gap: "50px" }}
            >
              <Button
                style={{ width: "100px" }}
                variant="contained"
                type="submit"
                disabled={!changeInData}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default UpdateUser;
