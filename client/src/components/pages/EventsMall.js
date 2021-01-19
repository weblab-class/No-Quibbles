import React, { Component } from "react";
import "../../utilities.css";
import "./EventsMall.css";
// import an image path instead of specifying it directly in html
import carticon from "../../../dist/imgs/shopping-cart-icon.jpg"

class EventsMall extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        user: {name: "dummy"},
      };
    }
  
    componentDidMount() {
      document.title = "Events Mall Page";
      // remember -- api calls go here!
      get(`/api/user`).then((user) => this.setState({ user: user }));
    }

    addToCart = (ind, user) => {
      user.cart[ind] = True;
    };
  
    render() {
        return (
            <>
            <div className="Cart-container">
              <h1>Choose your events!</h1>
              <section ontouchStart="" id="eventsmall">
              
              <a href="/cart/" className="btn"><span><img src={carticon} /></span></a>
              </section>
              
            </div>
            <br></br>
            <div ontouchstart="" id="eventsmall" className="EventsMall-grid">
  
              {/* Wireframe 'sketch' buttons */}

              <a href="#" className="btn" className="tooltip"><span>Event</span>
                <div className="tooltiptext">Tags</div>
              </a>

              {/* <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>
              
              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a> */}

            </div>

            </>
        );
    }
}

export default EventsMall;
