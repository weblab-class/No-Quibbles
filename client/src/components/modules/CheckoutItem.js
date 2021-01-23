import React, { Component } from "react";
import "../../utilities.css";
import "./CheckoutItem.css";
import "../pages/Checkout.css";

class CheckoutItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    
    componentDidMount() {}
  
    render() {
      return (
          <>
        <li className="list__item">
            <span className="list__name">{this.props.name}</span>
            <span className="list__price">{this.props.time}</span>
        </li>
        </>
      );
    }
  }
  
  export default CheckoutItem;