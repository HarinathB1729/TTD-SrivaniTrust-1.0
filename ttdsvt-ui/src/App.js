import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./Public/Login";
import Layout from "./Authorized/Layout";
import BhajanaMandiralu from "./Authorized/BhajanaMandiralu";
import Reports from "./Authorized/Reports";
import Users from "./Authorized/Users";
import Profile from "./Authorized/Profile";
import HomePage from "./Authorized/HomePage";
import NewUser from "./Authorized/NewUser";
import ChangePassword from "./Authorized/ChangePassword";
import { useAuth } from "./Authorized/AuthProvider";
import PageNotFound from "./Public/PageNotFound";
import UpdateUser from "./Authorized/UpdateUser";

function App() {
  const { isAuthenticated } = useAuth();
  const [timeDifference, setTimeDifference] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const servertime = new Date(isAuthenticated.expires_at);
      const diff = Math.floor((servertime - now) / 300000); // in seconds
      setTimeDifference(diff);
    }, 300000); // update every 5 minutes

    return () => clearInterval(intervalId); // cleanup interval on unmount
  }, [isAuthenticated?.expires_at]);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route
            path="/auth"
            element={
              isAuthenticated.token && timeDifference > 0 ? (
                <Layout />
              ) : (
                <Navigate to="/" />
              )
            }
          >
            <Route path="/auth/" element={<HomePage />} />
            <Route
              path="/auth/bhajanamandiralu"
              element={<BhajanaMandiralu />}
            />
            <Route path="/auth/users" element={<Users />} />
            <Route path="/auth/reports" element={<Reports />} />
            <Route path="/auth/profile" element={<Profile />} />
            <Route path="/auth/newuser" element={<NewUser />} />
            <Route path="/auth/updateuser" element={<UpdateUser />} />
            <Route path="/auth/changepwd" element={<ChangePassword />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
