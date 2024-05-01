import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Open/Login";
import Layout from "./Authorized/Layout";
import BhajanaMandiralu from "./Authorized/BhajanaMandiralu";
import Reports from "./Authorized/Reports";
import Users from "./Authorized/Users";
import Profile from "./Authorized/Profile";
import HomePage from "./Authorized/HomePage";
import NewUser from "./Authorized/NewUser";
import ChangePassword from "./Authorized/ChangePassword";
import { useAuth } from "./Authorized/AuthProvider";
import PageNotFound from "./Open/PageNotFound";
import UpdateUser from "./Authorized/UpdateUser";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/auth"
            element={isAuthenticated.token ? <Layout /> : <Navigate to="/" />}
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
