import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import Login from "./Public/Login";
import Layout from "./Authorized/Layout";
import BhajanaMandiralu from "./Authorized/BhajanaMandiralu";
import Reports from "./Authorized/Reports";
import Users from "./Authorized/Users";
import Logout from "./Authorized/Logout";
import Profile from "./Authorized/Profile";
import HomePage from "./Authorized/HomePage";
import NewUser from "./Authorized/NewUser";
import ChangePassword from "./Authorized/ChangePassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/bhajanamandiralu" element={<BhajanaMandiralu />} />               
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />  
            <Route path="/newuser" element={<NewUser />} />  
            <Route path="/changepwd" element={<ChangePassword />} />  
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
