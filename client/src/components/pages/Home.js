import React, { Component } from "react";
import "../../utilities.css";
import "./Home.css";

class Home extends Component {
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
            <body>
                
                <section class="u-textCenter">
                    <h1>Greetings! Do you...</h1>
                    <h4>Like shopping, but not the necessity of spending cash?</h4>
                    <h4>Like planning, but would rather not confine your time in rigid blocks? </h4>
                    <h4>Like to know where your time is going, but tracking it is a pain?</h4>
                    <h1>Great news! This site is for you :) </h1>
                </section>
                
            </body>
            </>
        );
    }
}

export default Home;
