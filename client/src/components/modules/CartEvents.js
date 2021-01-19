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
          <>
        <div>
            

          <div className="CartEvents-container u-flexColumn">
              <div className="Cart-event u-flex-alignCenter"><label for="event-select u-flex-alignCenter">Add to cart:</label>
              <br></br>
              <select id="event-select">
              {this.props.cartEvents.map((x, i) => <option key={i}>{x}</option>
              )}
              </select>
              <br></br>
              Time to spend: 
              <br></br>
              <input type="text"/>
              </div>
            </div> 
        </div>
        </>
      );
    }
  }
  
  export default CartEvents;
  