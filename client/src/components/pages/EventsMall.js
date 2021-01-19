import React, { Component } from "react";
import "../../utilities.css";
import "./EventsMall.css";
import carticon from "../../../dist/imgs/shopping-cart-icon.jpg"

class EventsMall extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {};
    }
  
    componentDidMount() {
      document.title = "Events Mall Page";
      // remember -- api calls go here!
    }
  
    render() {
        return (
            <>
            <div className="Cart-container">
              <h1>Choose your events!</h1>
              <section ontouchStart="" id="eventsmall">
              {/* <a href="/cart/" className="btn"><span><img src="../../../../dist/imgs/shopping-cart-icon.jpg" /></span></a> */}
              
              <a href="/cart/" className="btn"><span><img src={carticon} /></span></a>
              </section>
              
            </div>
            <br></br>
            <div ontouchstart="" id="eventsmall" className="EventsMall-grid">
  
              {/* Wireframe 'sketch' buttons */}

              <a href="#" class="btn" class="tooltip"><span>Event</span>
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
