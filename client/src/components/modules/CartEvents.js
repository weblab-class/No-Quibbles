import React, { Component } from "react";
import { post } from "../../utilities.js";
import "../../utilities.css";
import "./CartEvents.css";

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
    // reference using this.handleSubmit
    handleSubmit = (event) => {
      // default to reload page when submit form
      event.preventDefault();
      // const body = this.state
      const body = {
        name: this.state.name,
        time: this.state.time,
      }
      post(`/api/additem`, body).then((res) => {
        // this.setState({ user: user });
        console.log(res);
      });
    }
    
    // special lifecycle methods (builtin)  
    componentDidMount() {}
  
    render() {
      return (
          <>
        <div>
            
          <form className="CartEvents-container u-flexColumn" onSubmit={this.handleSubmit} >
              <div className="Cart-event u-flex-alignCenter"><label htmlFor="event-select u-flex-alignCenter">Add to cart:</label>
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
              <button type="submit">Add to Cart!</button> 
            </form> 

        </div>
        </>
      );
    }
  }
  
  export default CartEvents;
  