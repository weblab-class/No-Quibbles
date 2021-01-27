import React, { Component } from "react";
import { get } from "../../utilities";
import "../../utilities.css";
import "./EventsMall.css";
// import an image path instead of specifying it directly in html
import carticon from "../../../dist/imgs/shopping-cart-icon.jpg"
import CartEvents from "../modules/CartEvents.js"
// array.map => list of data from database -> one-to-one array

class EventsMall extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        events_chosen: [],
      };
    }
  
    componentDidMount() {
      document.title = "Events Mall Page";
      // remember -- api calls go here!
    }

    addToCart = (event_name) => {
      let new_cart = [ ... this.state.events_chosen ];
      let LOL = new_cart.indexOf(event_name);
      if (LOL === -1) {
        // only creates a new template tile if not on page
        new_cart.push(event_name);
      }
      // new_cart.push(event_name);
      this.setState({
      events_chosen: new_cart,
      });
    }

    render() {
        return (
            <>
            <div className="Cart-container">
              <h1>Choose your events!</h1>

              {/* <section ontouchStart="" id="eventsmall">
              <a href="#" className="btn"><span>Add Event to DB</span></a>
              </section> */}

              {/* <section id="eventsmall">
              <a href="/cart/" className="btn"><span><img src={carticon} /></span></a>
              </section> */}

            </div>
            <br></br>

            <div id="eventsmall" className="EventsMall-grid">


              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Pset Night ")}><span>Pset Night</span>
                <div className="tooltiptext">Tags: Education, Friends</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Office Hours ")}><span>Office Hours</span>
                <div className="tooltiptext">Tags: Education</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Grocery Run ")}><span>Grocery Run</span>
                <div className="tooltiptext">Tags: Food, Exercise</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Movie Time ")}><span>Movie Time</span>
                <div className="tooltiptext">Tags: Friends, Fun</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Walking ")}><span>Club Meeting</span>
                <div className="tooltiptext">Tags: Communication</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Lecture ")}><span>Lecture</span>
                <div className="tooltiptext">Tags: Education, Friends</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Reading ")}><span>Reading</span>
                <div className="tooltiptext">Tags: Entertainment, Education</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Study Break ")}><span>Study Break</span>
                <div className="tooltiptext">Tags: Entertainment, Education, Friends</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Journal Club ")}><span>Journal Club</span>
                <div className="tooltiptext">Tags: Education</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Messaging ")}><span>Messaging</span>
                <div className="tooltiptext">Tags: Communication, Friends</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Language Learning ")}><span>Language Learning</span>
                <div className="tooltiptext">Tags: Communication, Education</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Creative Project ")}><span>Creative Project</span>
                <div className="tooltiptext">Tags: Education, Education</div>
              </a>
            
            <br></br>

              
            </div>

            <h3>Enter the minutes you want to spend on your chosen events: </h3>
            <CartEvents cartEvents={this.state.events_chosen} />

            </>
        );
    }
}

export default EventsMall;
