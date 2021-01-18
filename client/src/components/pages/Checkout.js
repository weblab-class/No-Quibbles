import React, { Component } from "react";
import { get } from "../../utilities";
import "../../utilities.css";
import "./Checkout.css";

class Checkout extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: undefined,
      };
    }

    componentDidMount() {
        document.title = "Checkout Page";
        get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }));
    }
  
    render() {
        return (
            <>
            <h1>you are now at checkout</h1>
            {/* <h2>Hi {this.state.user.name}, this is your checkout page</h2> */}
            </>
        );
    }
}

export default Checkout;