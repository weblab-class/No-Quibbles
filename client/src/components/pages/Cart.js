import React, { Component } from "react";
import { get, post } from "../../utilities";
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
  
    handleCheckout = (res) => {
        post(`/api/clearcart`);
        console.log(res); //why is it not working??
        }

    componentDidMount() {
      document.title = "Cart Page";
      // remember -- api calls go here!
      get(`/api/user`).then((user) => this.setState({ user: user }));
    }

    // emptyCart(user) {
    //     const num = user.all_eventids.length;
    //     let new_cart = [];
    //     for (let x = 0; x < num; x++){
    //       new_cart.push(false)
    //     } 
    //     user.cart = new_cart;
    // }
  
    render() {
        return (
            <>
            {console.log(this.state.user.cart)}
            <form className="CartEvents-container u-flexColumn" onSubmit={this.handleCheckout} action="/checkout/">
              <button type="submit">Checkout</button>
            </form>

            {/* <h1>Proceeding towards checkout...</h1> */}
            {/* <section ontouchstart="" id="eventsmall">
              <a href="/checkout/" className="btn"><span>Checkout</span></a>
            </section> */}
            </>
        );
    }
}

export default Cart;