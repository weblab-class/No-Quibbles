import React, {Component} from "react";

import "../../utilities.css";
import "./Profile.css";

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: undefined,
      };
    }
  
    componentDidMount() {
      document.title = "Profile Page";
      get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }));
    }
  
    render() {
      if (!this.state.user) {
        return <div> Loading...⏳ </div>;
      }
      return (
        <>
          <h1 className="Profile-name u-textCenter">{this.state.user.name}</h1>
          <hr className="Profile-line" />
          <div className="u-flex">
            <div className="Profile-subContainer u-textCenter">
              <h3 className="Profile-subTitle">My Shopping History 🛒</h3>
              <div id="profile-description">
                It's so lonely in here... go budget your day! ⏱️
              </div>
            </div>
            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">My Stats</h4>
              <div id="previous-stats">Are you any of the things below? Start shopping to find out!</div>
            </div>
            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">My Happiness</h4>
              <div id="previous-happiness">happy?</div>
            </div>
            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">My Health</h4>
              <div id="previous-health">healthy?</div>
            </div>
            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">My Connections</h4>
              <div id="previous-connections">connected?</div>
            </div>
            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">My Academics</h4>
              <div id="previous-academics">focused?</div>
            </div>
            </div>
        </>
      );
    }
  }
  
  export default Profile;
  
