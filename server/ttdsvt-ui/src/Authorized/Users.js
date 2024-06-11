import { Container } from "@mui/material";
import "../App.css";
import React, { useEffect, useState } from "react";
import UsersData from "./UsersData";
import { getUsersApiCall } from "../api"; // Import getUsers directly
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

function Users() {
  const { isAuthenticated } = useAuth();
  const token = isAuthenticated.token;

  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  const isAdmin =
    isAuthenticated["role"] === "admin" ||
    isAuthenticated["role"] === "superadmin";

  useEffect(() => {
    const fetchUsersData = async () => {
      if (isAdmin) {
        try {
          const data = await getUsersApiCall(token); // Call getUsers directly
          // console.log("data",data)
          setUsersData(data);
        } catch (error) {
          if (error.response.status === 401) navigate("/");
          console.log("Error fetching users:", error);
        }
      }
    };
    fetchUsersData();
  }, [isAdmin]); // Make sure to add isAdmin to the dependency array

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
          <UsersData usersData={usersData} token={token} />
        ) : (
          "You Don't Have Permission to View This Page"
        )}
      </Container>
    </>
  );
}

export default Users;
