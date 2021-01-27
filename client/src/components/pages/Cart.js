import React, { Component } from "react";
import { get, post } from "../../utilities";
import "../../utilities.css";
import "./Cart.css";
import "./EventsMall.css";
import CartItem from "../modules/CartItem.js";

class Cart extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        user: {name: "dummy"},
        cart: [],
      };
    }
  
    handleCheckout = () => { post(`/api/clearcart`) }

    componentDidMount() {
      document.title = "Cart Page";
      // remember -- api calls go here!
      get(`/api/user`).then((user) => this.setState({ user: user }));
      get(`/api/cart`).then((cart) => this.setState({ cart: cart.itemlist }));
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
      console.log(this.state.cart);
      const cartItems = this.state.cart.map((item) => {
          return <CartItem name={item.name} time={item.time} itemid={item._id} /> 
      })
      return (
        <>
        {/* {JSON.stringify(this.props)} */}
            
        <h2>Items in your cart:</h2>
        <div className="u-flexColumn">{cartItems}</div>

        <br />
        <br />

        <form onSubmit={this.handleCheckout} action="/checkout/">
          {/* if we clear cart upon submit -> will be empty? */}

          <button className="myButton" type="submit">Checkout</button>
          {/* <button type="submit">Checkout</button> */}
        </form>

        <br />
        <br />
        <div className="Cart-container">
              {/* <h3>You can checkout or shop more!</h3> */}
              <section ontouchStart="" id="eventsmall">
              <a href="/eventsmall/" className="btn"><span>Continue Shopping</span></a>
              </section>
              
            </div>
            </>
        );
    }
}

export default Cart;