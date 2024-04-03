import { Container } from "@mui/material";
import "../App.css";
import React from "react";
import UsersData from "./UsersData";

function Users() {
  const usersData = [
    {
      username:'abc',
      email:'abc@gmail.com',
      password:'password',
      phoneno:'1234567890',
      role:'admin',
      permission:'access'
    },
    {
      username:'abc2',
      email:'abc2@gmail.com',
      password:'password2',
      phoneno:'1234567890',
      role:'admin2',
      permission:'access2'
    },
    {
      username:'abc3',
      email:'abc3@gmail.com',
      password:'password3',
      phoneno:'1234567890',
      role:'admin3',
      permission:'access3'
    },
    {
      username:'abc4',
      email:'abc4@gmail.com',
      password:'password4',
      phoneno:'1234567890',
      role:'admin4',
      permission:'access4'
    },
    {
      username:'abc25',
      email:'abc25@gmail.com',
      password:'password25',
      phoneno:'1234567890',
      role:'admin25',
      permission:'access25'
    },
    {
      username:'abc36',
      email:'abc36@gmail.com',
      password:'password36',
      phoneno:'1234567890',
      role:'admin36',
      permission:'access36'
    }
  ];
  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{color:"#B31B1B"}}>Users</h2>
      </div>
      <Container sx={{ border: "1px solid black", padding:'0 !important', minHeight:'58vh' }}>
        <UsersData usersData={usersData} />
      </Container>
    </>
  );
}

export default Users;
