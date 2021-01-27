import React, { Component } from "react";
// import { post } from "../../utilities.js";
import "../../utilities.css";
import "./CartEvents.css";
import CartNewItem from "./CartNewItem.js";

/**
 *
 * Proptypes
 * @param {[String]} cartEvents
 */

class CartEvents extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "dummy",
        time: 0,
      }
    }
  
    render() {
      console.log(this.props.cartEvents)
      const cartItems = this.props.cartEvents.map((name, index) => {
        return <CartNewItem name={name} key={index} /> //not safest, usually unique id
      })
      return (
        <>
        {/* {JSON.stringify(this.props)} */}
      <div className="AllEvents-container">  
        {cartItems}
      </div>
        </>
      );
    }
  }
  
  export default CartEvents;
  