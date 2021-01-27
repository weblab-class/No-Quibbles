import React, { Component } from "react";
import {CircleProgress} from "../../../../node_modules/react-gradient-progress/dist/index.js";
import "../../utilities.css";
import "./Progress.css";

class Progress extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //   times: {
        //       "dummy": 0,
        //   },
          happiness: Math.floor((Math.random() * 100) + 1),
          socialLife: Math.floor((Math.random() * 100) + 1),
          health: Math.floor((Math.random() * 100) + 1),
          academics: Math.floor((Math.random() * 100) + 1),
      };
    }

    componentDidMount() {
    }

    // componentDidMount() {
    //     let times = {
    //         " Pset Night ": 0,
    //         " Office Hours ": 0,
    //         " Grocery Run ": 0,
    //         " Movie Time ": 0,
    //         " Walking ": 0,
    //         " Lecture ": 0,
    //         " Reading ": 0,
    //         " Study Break ": 0,
    //         " Journal Club ": 0,
    //         " Messaging ": 0,
    //         " Language Learning ": 0,
    //         " Creative Project ": 0,
    //     };
    //     let cart = this.props.cart;
    //     cart.map((itemid) => {
    //         get(`/api/item`, {itemid: itemid}).then((item) => {
    //             times[item.name] = item.time;
    //         })
    //     });
    //     this.setState({times : times});
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.cart && this.props.cart !== prevProps.cart) {
    //     let times = {
    //         " Pset Night ": 0,
    //         " Office Hours ": 0,
    //         " Grocery Run ": 0,
    //         " Movie Time ": 0,
    //         " Walking ": 0,
    //         " Lecture ": 0,
    //         " Reading ": 0,
    //         " Study Break ": 0,
    //         " Journal Club ": 0,
    //         " Messaging ": 0,
    //         " Language Learning ": 0,
    //         " Creative Project ": 0,
    //     };
    //     console.log(times)
    //     let cart = this.props.cart;
    //     cart.map((itemid) => {
    //         get(`/api/item`, {itemid: itemid}).then((item) => {
    //             times[item.name] = item.time;
    //             this.setState({times : times});
    //         })
    //     });
    // }
    // }

    // calcPercentages() {
    //     const times = this.state.times;
    //     const t1 = times[" Study Break "] + times[" Messaging "] + times[" Movie Time "] + times[" Language Learning "] + times[" Creative Projects "] + times[" Reading "];
    //     const t2 = times[" Study Break "] + times[" Journal Club "];
    //     const t3 = times[" Grocery Run "] + times[" Walking "];
    //     const t4 = times[" Reading "] + times[" Pset Night "] + times[" Office Hours "] + times[" Lecture "] + times[" Journal Club "] + times[" Language Learning "];
    //     const t5 = t1+t2+t3+t4;
    //     return {t1: ((t1/t5) * 100), t2: ((t2/t5) * 100), t3: ((t3/t5) * 100), t4: ((t4/t5) * 100)}
    // }
  
    render() { 
        // const retVal = this.calcPercentages();
        return (
            <>
            <div className="Progress-container">
                <h2> See how you are doing on:</h2>
            </div>
            <div className="Progress-container">
                <h3>Happiness</h3>
                <h3>Social Life</h3>
                <h3>Health</h3>
                <h3>Academics</h3>
            </div>
            <br></br>
            <div className="Progress-container">
                <CircleProgress percentage={this.state.happiness} strokeWidth={8} primaryColor={["#11FFBD", "#AAFFB9"]} secondaryColor= "#f0f0f0"/>
                <CircleProgress percentage={this.state.socialLife} strokeWidth={8} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0"/>
                <CircleProgress percentage={this.state.health} strokeWidth={8} primaryColor={["#11FFBD", "#AAFFB9"]} secondaryColor= "#f0f0f0"/>
                <CircleProgress percentage={this.state.academics} strokeWidth={8} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0"/>
            </div>
            </>
        );
    }
}

export default Progress;