import React, { Component } from "react";
import "../../utilities.css";
import "./EventsMall.css";

class EventsMall extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {};
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }
  
    render() {
        return (
            <>
            <div>
              <h1>Choose your events!</h1>
            </div>
            </>
        );
    }
}

export default EventsMall;
