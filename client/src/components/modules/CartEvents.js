import React, { Component } from "react";
import "../../utilities.css";
import "./CartEvents.css";

/**
 * Component that renders cat happiness
 *
 * Proptypes
 * @param {[String]} cartEvents is how happy your cat is
 */

class CartEvents extends Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {}
  
    render() {
      return (
        <div className="CartEvents-container">
          <div className="Cart-event">
            <h1>{this.props.cartEvents[0]}</h1>
          </div>
        </div>
      );
    }
  }
  
  export default CartEvents;
  