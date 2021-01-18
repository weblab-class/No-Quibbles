import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "868002205529-tj8jvfgtjitg8hqt15mjtnvhs8qc1sm7.apps.googleusercontent.com";

// TODO: Change name of file to NavBar.js
// TODO: Change to NavBar

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
  }

  render() {
    return (
      <> 
        <nav className="NavBar-container">
          <div className="NavBar-title u-inlineBlock">WebsiteName</div>
          
          <div className="NavBar-linkContainer u-inlineBlock">
          {this.props.userId && (
            <Link to={`/profile/${this.props.userId}`} className="NavBar-link">
              Profile
            </Link>
          )}

          {this.props.userId && (
            <Link to={`/eventsmall/${this.props.userId}`} className="NavBar-link">
              EventsMall
            </Link>
          )}

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
      </>
    );
  }
}

// TODO: change to NavBar
export default Skeleton;
