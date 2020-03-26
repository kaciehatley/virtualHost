import React, { useState } from 'react';
import './App.css';
import './style.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
// import Body from "./components/Body";
import Signup from "./components/Signup";
import Arrow from "./components/Arrow";
import About from "./components/About";
import Events from "./components/Events";
import Event from "./components/Event";
import Vendor from "./components/Vendor";
import Copyright from "./components/Copyright";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {

  let [userState, setUserState] = useState({
    loggedIn: false,
    fname: "Kacie",
    lname: "Hatley",
    light: true
  });

  function updateLightMode() {
    let currentBackground = document.getElementById("backgroundColor")
    if (userState.light === true) {
      userState.light = false
      currentBackground.setAttribute("style", "background-color: gray")
    }
    else if (userState.light === false) {
      userState.light = true
      currentBackground.setAttribute("style", "background-color: #fbfcf1")
    }
    setUserState({
      ...userState
    });
  }

  function updateLoginStatus() {

    if (userState.loggedIn === false) {
      userState.loggedIn = true;
    }
    else if (userState.loggedIn === true) {
      userState.loggedIn = false
    }
    setUserState({
      ...userState
    });
  } 

  return (
    <div 
    className="App"
    >
      <UserContext.Provider value={userState}>
      <Router>
        <Navbar
        updateLoginStatus = {updateLoginStatus}
        />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Login />
            <Arrow />
            <About />
          </Route>
          <Route exact path={["/signup"]}>
            <Signup />
          </Route>
          <Route exact path={["/events"]}>
            <Events />
          </Route>
          <Route path={["/event/:id", "/vendorsearchtest"]}>
            <Event />
          </Route>
          <Route path={["/event"]}>
            <Event />
          </Route>
          <Route exact path={"/mydashboard"}>
            <Dashboard />
          </Route>
          <Route exact path={"/settings"}>
            <Settings 
            updateLightMode = {updateLightMode}
            />
          </Route>
          <Route path={["/vendor/:id"]}>
            <Vendor />
          </Route>
        </Switch>
        <Copyright />
    </Router>
    </UserContext.Provider>
    </div>

  );
}

export default App;
