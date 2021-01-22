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
        user: {name: "dummy"},
        events_chosen: [],
      };
    }
  
    componentDidMount() {
      document.title = "Events Mall Page";
      // remember -- api calls go here!
      get(`/api/user`).then((user) => this.setState({ user: user }));
    }

    // addToCart(ind, user) {
    //   user.cart[ind] = True;
    // }

    addToCart = (event_name) => {
      let new_cart = [ ... this.state.events_chosen ];
      new_cart.push(event_name);
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
  
              {/* Wireframe 'sketch' buttons */}

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Pset Night ")}><span>Pset Night</span>
                <div className="tooltiptext">Tags</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Office Hours ")}><span>Office Hours</span>
                <div className="tooltiptext">Tags</div>
              </a>

              <a href="#" className="btn" className="tooltip" onClick= {() => this.addToCart(" Grocery Run ")}><span>Grocery Run</span>
                <div className="tooltiptext">Tags</div>
              </a>
              
              <CartEvents cartEvents={this.state.events_chosen} />

              <br></br>
              
            </div>
            <div className="Checkout-container">
                <section ontouchstart="" id="eventsmall">
                {/* <a href={`/checkout/${this.props.userId}`} class="btn"><span>Checkout</span></a> */}
                <a href="/checkout/" className="btn"><span>Checkout</span></a>
                </section>
              </div>

            </>
        );
    }
}

export default EventsMall;
