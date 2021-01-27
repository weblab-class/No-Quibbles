import React, { Component } from "react";
import { post } from "../../utilities.js";
import "../../utilities.css";
import "./CartNewItem.css";

class CartNewItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name,
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
      if (body.time != 0) {
        post(`/api/additem`, body).then((res) => {
          // this.setState({ user: user });
          console.log(res);
        });
      } 
    }
    
    handleChange = (event) => {
      //basic
      ////update time
      //target accesses input, get val of input
      this.setState({ time: event.target.value })
    }


    // special lifecycle methods (builtin)  
    componentDidMount() {}
  
    render() {
      return (
          <>
        <div>
            
          <form className="CartEvents-container u-flexColumn" onSubmit={this.handleSubmit} >
              <div className="Cart-event u-flex-alignCenter">
                {/* <label htmlFor="event-select u-flex-alignCenter">Add to cart:</label> */}
              {/* <select id="event-select">
              {this.props.cartEvents.map((x, i) => <option key={i}>{x}</option>
              )}
              </select> */}
              Name: 
              <br></br>
              <input type="text" value={this.props.name} disabled />

              <br></br>
              Time to spend: 
              <br></br>
              <input type="text" value={this.state.time} onChange={this.handleChange} />
              </div>
              <button type="submit">Add to Cart!</button> 
            </form> 

        </div>
        </>
      );
    }
  }
  
  export default CartNewItem;