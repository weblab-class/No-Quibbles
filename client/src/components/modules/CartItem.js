import React, { Component } from "react";
import { post } from "../../utilities.js";
import "../../utilities.css";
import "./CartItem.css";

class CartItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "dummy",
        time: 0,
      }
    }
    // reference using this.handleSubmit
    handleDelete = (event) => {
      // default to reload page when submit form
      event.preventDefault();
      // const body = this.state
      const body = {
        itemid: this.props.itemid
      }
      post(`/api/deleteitem`, body).then((res) => {
        // this.setState({ user: user });
        console.log(res);
        window.location.reload(); //force refresh
      });
    }
    
    // special lifecycle methods (builtin)  
    componentDidMount() {}
  
    render() {
      return (
          <>
        <div>
            
          <form className="CartItem-container" onSubmit={this.handleDelete} >
              <span>{this.props.name}......</span>
              <span>{this.props.time}</span>
              <button type="submit">Delete!</button> 
          </form> 

        </div>
        </>
      );
    }
  }
  
  export default CartItem;