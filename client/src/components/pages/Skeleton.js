import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

const GOOGLE_CLIENT_ID = "868002205529-tj8jvfgtjitg8hqt15mjtnvhs8qc1sm7.apps.googleusercontent.com";

// TODO: Change name of file to NavBar.js
// TODO: Change to NavBar

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <> 
        <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">WebsiteName</div>
        <div className="NavBar-linkContainer u-inlineBlock">
          {/* <Link to="/" className="NavBar-link">
            Home
          </Link>
          {this.props.userId && (
            <Link to={`/profile/${this.props.userId}`} className="NavBar-link">
              Profile
            </Link>
          )} */}
          {this.props.userId ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.props.handleLogout}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.props.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          )}
        </div>
        </nav>

        {/* <h1>Greetings! Do you...</h1>
        <section class="u-textCenter">
          <h4>Like shopping, but not the necessity of spending cash?</h4>
          <h4>Like planning, but would rather not confine your time in rigid blocks? </h4>
          <h4>Like to know where your time is going, but tracking it is a pain?</h4>
        </section>
        <h1>Great news! This site is for you :) </h1> */}

        {/* <h1>Good luck on your project :)</h1>
        <h2> What we provide in this skeleton</h2>
        <ul>
          <li>Google Auth (Skeleton.js & auth.js)</li>
          <li>Socket Infrastructure (client-socket.js & server-socket.js)</li>
          <li>User Model (auth.js & user.js)</li>
        </ul>
        <h2> What you need to change</h2>
        <ul>
          DONE: <li>Change the font in utilities.css</li>
          DONE: <li>Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)</li>
          DONE: <li>Change the Server CLIENT_ID for Google Auth (auth.js)</li>
          <li>Change the Database SRV for Atlas (server.js)</li>
          <li>Change the Database Name for MongoDB (server.js)</li>
          DONE: <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
          DONE: <li>Update website title in client/dist/index.html</li>
        </ul> */}
      </>
    );
  }
}

// TODO: change to NavBar
export default Skeleton;
