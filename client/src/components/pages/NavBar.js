import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./NavBar.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "868002205529-tj8jvfgtjitg8hqt15mjtnvhs8qc1sm7.apps.googleusercontent.com";

class NavBar extends Component {
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
          <Link to="/" className="NavBar-link">
            Home
          </Link>

          {this.props.userId && (
            <>
              <Link to="/profile/" className="NavBar-link">
                Profile
              </Link>
              <Link to={"/eventsmall/"} className="NavBar-link">
                EventsMall
              </Link>
              <Link to={"/cart/"} className="NavBar-link">
                Cart
              </Link>
            </>
          )}

          {this.props.userId ? (
            <Link to="/" className="NavBar-link">
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.props.handleLogout}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
            </Link>
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

export default NavBar;
