import React, { Component } from "react";
import "../../utilities.css";
import "./EventsMall.css";

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
            <div class="Cart-container">
              <h1>Choose your events!</h1>
              <section ontouchstart="" id="eventsmall">
              <a href={`/cart/${this.props.userId}`} class="btn"><span><img src="../../../client/dist/imgs/shopping-cart-icon.jpg" /></span></a>
              </section>
            </div>
            <br></br>
            <div ontouchstart="" id="eventsmall" class="EventsMall-grid">
  
              {/* Wireframe 'sketch' buttons */}

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
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

              <a href="#" class="btn" class="tooltip"><span>Event</span>
                <div class="tooltiptext">Tags</div>
              </a>

            </div>

            </>
        );
    }
}

export default EventsMall;
