import React, { Component } from "react";
import "../../utilities.css";
import "./Cart.css";
import "./EventsMall.css";

class Cart extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        user: {name: "dummy"},
      };
    }
  
    componentDidMount() {
      document.title = "Cart Page";
      // remember -- api calls go here!
      get(`/api/user`).then((user) => this.setState({ user: user }));
    }

    emptyCart = () => {
        const num = user.all_eventids.length;
        let new_cart = [];
        for (x = 0; x < num; x++){
          new_cart.push(false)
        } 
        user.cart = new_cart;
    }
  
    render() {
        return (
            <>
            <h1>Proceeding towards checkout...</h1>
            <section ontouchstart="" id="eventsmall">
              {/* <a href={`/checkout/${this.props.userId}`} class="btn"><span>Checkout</span></a> */}
              <a href="/checkout/" className="btn"><span>Checkout</span></a>
            </section>
            </>
        );
    }
}

export default Cart;