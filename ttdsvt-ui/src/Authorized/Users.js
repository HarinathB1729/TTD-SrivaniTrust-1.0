import { Container } from "@mui/material";
import "../App.css";
import React, { useEffect, useState } from "react";
import UsersData from "./UsersData";
import api from "../api";
import { useAuth } from "./AuthProvider";

function Users() {
  const { isAuthenticated } = useAuth();
  const token = isAuthenticated["token"];
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {

      if (isAuthenticated["role"] ==="admin" || isAuthenticated["role"] ==="superadmin") {
        api
          .get("users/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            // console.log("response", res);
            setUsersData(res.data);
          })
          .catch((err) => {
            console.log("Error :", err);
          });
      }
    };
    fetchUsersData();
  }, []);

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>Users</h2>
      </div>
      <Container
        sx={{
          border: "1px solid black",
          padding: "0 !important",
          minHeight: "58vh",
        }}
      >
        {isAuthenticated["role"] === "admin" ? (
          <UsersData usersData={usersData} />
        ) : (
          "You Don't Have Permission to View This Page"
        )}
      </Container>
    </>
  );
}

export default Users;
