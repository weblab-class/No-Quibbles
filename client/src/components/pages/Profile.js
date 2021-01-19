import React, {Component} from "react";
import { get } from "../../utilities";
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
      get(`/api/user`).then((user) => this.setState({ user: user }));
    }
  
    render() {
      if (!this.state.user) {
        return <div> Loading... ⏳ </div>;
      }
      return (
        <>
        <body id="profile">
          <h1 className="Profile-name u-textCenter">{this.state.user.name}</h1>
          <hr className="Profile-line" />
          <div className="u-flex">

            <div className="Profile-subContainer u-textCenter">
              <h3 className="Profile-subTitle">My Shopping History 🛒</h3>
              <div id="profile-description">
                It's so lonely in here... go budget your day! ⏱️
              </div>
            </div>
            
            <div className="Profile-statsContainer">

            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">My Stats</h4>
              <div className="Profile-description u-textCenter">Are you any of the things below? Start shopping to find out!</div>
            </div>

            <div className="Profile-substatsContainer">

              <div className="Profile-subContainer">
                <h4 className="Profile-statsTitle u-textCenter">My Happiness</h4>
                <div className="Profile-description u-textCenter">happy?</div>
              </div>

              <div className="Profile-subContainer">
                <h4 className="Profile-statsTitle u-textCenter">My Wellbeing</h4>
                <div className="Profile-description u-textCenter">healthy?</div>
              </div>
            </div>

            <div className="Profile-substatsContainer">
              <div className="Profile-subContainer">
                <h4 className="Profile-statsTitle u-textCenter">My Connections</h4>
                <div className="Profile-description u-textCenter">connected?</div>
              </div>

              <div className="Profile-subContainer">
                <h4 className="Profile-statsTitle u-textCenter">My Academics</h4>
                <div className="Profile-description u-textCenter">focused?</div>
              </div>

              </div>
            </div>

            </div>
          </body>
        </>
      );
    }
  }
  
  export default Profile;
  
