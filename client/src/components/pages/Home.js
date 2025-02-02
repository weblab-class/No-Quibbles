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
        document.title = "Home Page";
      // remember -- api calls go here!
    }
  
    render() {
        return (
            <>
            <body id="home">
                <section className="u-textCenter">
                    <h1>Greetings! Do you...</h1>
                </section>
                <section className="u-textCenter">
                    <h4>Like shopping, but not the necessity of spending cash?</h4>
                    <h4>Like planning, but would rather not confine your time in rigid blocks? </h4>
                    <h4>Like knowing how much your activities are impacting your health, focus, connections, and happiness?</h4>
                </section>
                <section className="u-textCenter">
                    <h1>Then you've come to the right place! :) </h1>
                </section>
                <br />
                <section className="u-textCenter">
                <h3>Login right away to start event-shopping in our EventsMall!</h3>
                </section>
            </body>
            </>
        );
    }
}

export default Home;
