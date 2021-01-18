import React, { Component } from "react";
import "../../utilities.css";
import "./Cart.css";
import "./EventsMall.css";

class Cart extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {};
    }
  
    componentDidMount() {
      document.title = "Cart Page";
      // remember -- api calls go here!
    }
  
    render() {
        return (
            <>
            <h1>you are towards checkout but not there</h1>
            <section ontouchstart="" id="eventsmall">
              {/* <a href={`/checkout/${this.props.userId}`} class="btn"><span>Checkout</span></a> */}
              <a href="/checkout/" class="btn"><span>Checkout</span></a>
            </section>
            </>
        );
    }
}

export default Cart;