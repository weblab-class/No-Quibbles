import React, { Component } from "react";
import "../../utilities.css";
import { get } from "../../utilities";
import "../pages/Checkout.css";

class CheckoutItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "dummy",
        time: 0,
      }
    }
    
    componentDidMount() {
      get(`/api/item`, {itemid: this.props.itemid}).then((item) => {
        this.setState({ name: item.name, time: item.time});
      })
    }
  
    render() {
      return (
          <>
        <li className="list__item">
            <span className="list__name">{this.state.name}</span>
            <span className="list__price">{this.state.time}</span>
        </li>
        </>
      );
    }
  }
  
  export default CheckoutItem;