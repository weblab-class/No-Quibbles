import React, { Component } from "react";
import "../../utilities.css";
import { get } from "../../utilities";
import "../pages/Checkout.css";

class CheckoutTotal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        totalTime: 0,
      }
    }
    
    // componentDidMount() => doesn't work because only runs once
  
    componentDidUpdate(prevProps) {
      if (this.props.cart && this.props.cart !== prevProps.cart) {
      let cart = this.props.cart;
      console.log(this.props.cart);
      let newTime = 0;
      for (let i=0; i<cart.length; i++) {
          get(`/api/item`, {itemid: cart[i]}).then((item) => {
            console.log(item)
            newTime = newTime + item.time;
            this.setState({ totalTime: newTime }); 
      })
      // this.setState({ totalTime: newTime }); 
    } 
  }}

    render() {
        console.log(this.props.cart);
        console.log(this.state.totalTime);
      return (
        <>
        <span className="cart__total-price">{this.state.totalTime} min</span>
        </>
      );
    }
  }

  export default CheckoutTotal;