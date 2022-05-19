import React, { useState } from "react";
import Header from "../../components/navigation/Header";
import Authentication from "../auth/Authentication";
import SideBar from "../../components/navigation/SideBar";
import './Dashboard.css';
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";
import HomePage from "./HomePage";
import { Route, Link, Routes, Router } from "react-router-dom";


export default function Dashboard({userUsername, setIsLoggedIn}) {
  // returns dashboard div component

  // Props:
  // - userUsername: String - state of username
  // - setIsLoggedIn: Function - sets state of isLoggedIn

  // setup temporary state to navigate back to Authentication
  const [tempState, setTempState] = useState(false);

  // function to logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setTempState(true);
  }

  return (
    tempState ? (
      <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={userUsername} />
    ) : (
        <div className="dashboard-container">
            <Header userUsername={userUsername} logout={logout} />
            <SideBar />
            <div className="dashboard-content">
              {/* <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/watchlater" element={<WatchLater />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </Routes> */}
            </div>
        </div>
    )
  )
}