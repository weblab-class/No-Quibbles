import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";

// import NavBar from "./pages/NavBar.js"
import Skeleton from "./pages/Skeleton.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import EventsMall from "./pages/EventsMall.js";
import Cart from "./pages/Cart.js";
import Checkout from "./pages/Checkout.js";

import "../utilities.css";
import "./App.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <>
        <Skeleton
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <div className="App-container">
            <Router>
                <Home path="/" />
              <Profile path="/profile/:userId" />
              <NotFound default />
              <EventsMall path="/eventsmall/:userId"/>
              <Cart path="/cart/:userId" />
              <Checkout path="/checkout/:userId" />
            </Router>
        </div>
      </>
    );
  }
}

export default App;
