import React, { Component } from "react";
import { get } from "../../utilities";
import "../../utilities.css";
import "./Checkout.css";
import "./EventsMall.css";
import CheckoutItem from "../modules/CheckoutItem.js";

class Checkout extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {name: "dummy"},
        lastcart: [],
      };
    }
   
    componentDidMount() {
        document.title = "Checkout Page";
        get(`/api/user`).then((user) => this.setState({ user: user }));
        get(`/api/recentsession`).then((sess) => {
          console.log(sess)
          this.setState({ lastcart: sess.cart}) //do we have to pass in req?
        });
    }
  
    render() { 
      console.log(this.state.user)
      console.log(this.state.lastcart)
      const checkoutItems = this.state.lastcart.map((item) => {
        return <CheckoutItem name={item.name} time={item.time} /> 
      })
        return (
            <>
            {/* {console.log(this.state.user.cart)} */}
            <div className="Cart-container">
              <h1>Checkout complete - thanks for shopping!</h1>
              <section ontouchStart="" id="eventsmall">
              <a href="/eventsmall/" className="btn"><span>Continue Shopping</span></a>
              </section>
              
            </div>
            <br></br>

            {/* <link href='https://fonts.googleapis.com/css?family=Raleway:600,400' rel='stylesheet' type='text/css' /> */}

            <div className="receipt">
              
              <header className="header">
                <div className="header__top">
                  <div className="header__logo">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.58 30.18"><defs><style>.a{fill:#253b80;}.b{fill:#179bd7;}.c{fill:#222d65;}</style></defs><title>PayPal</title><path class="a" d="M7.27,29.15l0.52-3.32-1.16,0H1.06L4.93,1.29A0.32,0.32,0,0,1,5,1.1,0.32,0.32,0,0,1,5.24,1h9.38C17.73,1,19.88,1.67,21,3a4.39,4.39,0,0,1,1,1.92,6.92,6.92,0,0,1,0,2.64V8.27l0.53,0.3a3.69,3.69,0,0,1,1.07.81,3.78,3.78,0,0,1,.86,1.94,8.2,8.2,0,0,1-.12,2.81,9.9,9.9,0,0,1-1.15,3.18,6.55,6.55,0,0,1-1.83,2,7.4,7.4,0,0,1-2.46,1.11,12.26,12.26,0,0,1-3.07.35H15.12a2.2,2.2,0,0,0-2.17,1.85l-0.06.3L12,28.78l0,0.22a0.18,0.18,0,0,1-.06.13,0.15,0.15,0,0,1-.1,0H7.27Z"/><path class="b" d="M23,7.67h0q0,0.27-.1.55c-1.24,6.35-5.47,8.55-10.87,8.55H9.33A1.34,1.34,0,0,0,8,17.89H8L6.6,26.83,6.2,29.36a0.7,0.7,0,0,0,.7.81h4.88a1.17,1.17,0,0,0,1.16-1l0-.25,0.92-5.83L14,22.79a1.17,1.17,0,0,1,1.16-1h0.73c4.73,0,8.43-1.92,9.51-7.48,0.45-2.32.22-4.26-1-5.62A4.67,4.67,0,0,0,23,7.67Z"/><path class="c" d="M21.75,7.15L21.17,7l-0.62-.12a15.28,15.28,0,0,0-2.43-.18H10.77a1.17,1.17,0,0,0-1.16,1L8,17.6l0,0.29a1.34,1.34,0,0,1,1.32-1.13h2.75c5.4,0,9.64-2.19,10.87-8.55C23,8,23,7.85,23,7.67a6.59,6.59,0,0,0-1-.43Z"/><path class="a" d="M9.61,7.7a1.17,1.17,0,0,1,1.16-1h7.35a15.28,15.28,0,0,1,2.43.18L21.17,7l0.58,0.15L22,7.24a6.69,6.69,0,0,1,1,.43c0.37-2.35,0-3.94-1.27-5.39S17.85,0,14.62,0H5.24A1.34,1.34,0,0,0,3.92,1.13L0,25.9a0.81,0.81,0,0,0,.8.93H6.6L8,17.6Z"/></svg> */}
                  </div>
                  <div className="header__meta">
                    <span className="header__date">01. 19. 2020</span>
                    {/* <span class="header__serial">0f-113</span> */}
                    {/* <span class="header__number">25042016</span> */}
                  </div>
                </div>
                <div className="header__greeting">
                  <span className="header__name">Hi, {this.state.user.name}! </span>
                  <span className="header__count">You've purchased three (3) items in our store.</span>
                  <span className="header__border"></span>
                </div>
                <div className="header__spacing"></div>
              </header>
              
              <section className="cart">
                  <h2 className="cart__header">You bought:</h2>
                  <ol className="list">
                    {checkoutItems}
                    {/* <li className="list__item">
                      <span className="list__name">Pset Night</span>
                      <span className="list__price">05:00</span>
                    </li>
                    <li class="list__item">
                      <span class="list__name">Office Hours</span>
                      <span class="list__price">02:00</span>
                    </li>
                    <li class="list__item">
                      <span class="list__name">Grocery Run</span>
                      <span class="list__price">01:30</span>
                    </li> */}
                  </ol>	
                  <hr className="cart__hr" />
                  <footer className="cart__total">
                    <h3 className="cart__total-label">Total</h3>
                    <span className="cart__total-price">08:30</span>				
                  </footer>
              </section>
              
              <footer className="bar-code">
                <div className="bar-code__code">
                  {/* <svg id="d17ac603-1444-403c-9daf-1afe6b3ad839" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 575.2 93.16"><defs><style>.\33 6de76d2-eb0f-431d-be12-6535d9fc4369,.\38 78966b7-abd4-4ef3-86d3-2321f80177f3,.b8e87e45-e06c-4d7b-92d7-30eed261c8dd,.e435b0ed-5ad4-4699-bad7-b1c15cfe3f86{fill:none;stroke:#000;stroke-miterlimit:10;}.\38 78966b7-abd4-4ef3-86d3-2321f80177f3{stroke-width:1.7px;}.e435b0ed-5ad4-4699-bad7-b1c15cfe3f86{stroke-width:3.7px;}.\33 6de76d2-eb0f-431d-be12-6535d9fc4369{stroke-width:7.7px;}.b8e87e45-e06c-4d7b-92d7-30eed261c8dd{stroke-width:5.7px;}</style></defs><title>Example_barcode</title><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M0.85,93.16V0m4,93.16V0m6,93.16V0"/><line class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" x1="17.85" y1="93.16" x2="17.85"/><line class="36de76d2-eb0f-431d-be12-6535d9fc4369" x1="25.85" y1="93.16" x2="25.85"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="32.85" y1="93.16" x2="32.85"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="40.85" y1="93.16" x2="40.85"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="46.85" y1="93.16" x2="46.85"/><line class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" x1="51.85" y1="93.16" x2="51.85"/><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M60.85,93.16V0m10,93.16V0m4,93.16V0m6,93.16V0m8,93.16V0m4,93.16V0m4,93.16V0m4,93.16V0m6,93.16V0"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="116.85" y1="93.16" x2="116.85"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="122.85" y1="93.16" x2="122.85"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="130.85" y1="93.16" x2="130.85"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="138.85" y1="93.16" x2="138.85"/><path class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" d="M143.85,93.16V0m8,93.16V0m6,93.16V0m6,93.16V0"/><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M170.85,93.16V0m6,93.16V0m8,93.16V0m4,93.16V0"/><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M193.85,93.16V0m4,93.16V0m6,93.16V0"/><line class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" x1="210.85" y1="93.16" x2="210.85"/><line class="36de76d2-eb0f-431d-be12-6535d9fc4369" x1="218.85" y1="93.16" x2="218.85"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="225.85" y1="93.16" x2="225.85"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="233.85" y1="93.16" x2="233.85"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="239.85" y1="93.16" x2="239.85"/><line class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" x1="244.85" y1="93.16" x2="244.85"/><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M253.85,93.16V0m10,93.16V0m4,93.16V0m6,93.16V0m8,93.16V0m4,93.16V0m4,93.16V0m4,93.16V0m6,93.16V0"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="309.85" y1="93.16" x2="309.85"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="315.85" y1="93.16" x2="315.85"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="323.85" y1="93.16" x2="323.85"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="331.85" y1="93.16" x2="331.85"/><path class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" d="M336.85,93.16V0m8,93.16V0m6,93.16V0m6,93.16V0"/><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M363.85,93.16V0m6,93.16V0m8,93.16V0m4,93.16V0"/><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M386.35,93.16V0m4,93.16V0m6,93.16V0"/><line class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" x1="403.35" y1="93.16" x2="403.35"/><line class="36de76d2-eb0f-431d-be12-6535d9fc4369" x1="411.35" y1="93.16" x2="411.35"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="418.35" y1="93.16" x2="418.35"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="426.35" y1="93.16" x2="426.35"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="432.35" y1="93.16" x2="432.35"/><line class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" x1="437.35" y1="93.16" x2="437.35"/><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M446.35,93.16V0m10,93.16V0m4,93.16V0m6,93.16V0m8,93.16V0m4,93.16V0m4,93.16V0m4,93.16V0m6,93.16V0"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="502.35" y1="93.16" x2="502.35"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="508.35" y1="93.16" x2="508.35"/><line class="b8e87e45-e06c-4d7b-92d7-30eed261c8dd" x1="516.35" y1="93.16" x2="516.35"/><line class="878966b7-abd4-4ef3-86d3-2321f80177f3" x1="524.35" y1="93.16" x2="524.35"/><path class="e435b0ed-5ad4-4699-bad7-b1c15cfe3f86" d="M529.35,93.16V0m8,93.16V0m6,93.16V0m6,93.16V0"/><path class="878966b7-abd4-4ef3-86d3-2321f80177f3" d="M556.35,93.16V0m6,93.16V0m8,93.16V0m4,93.16V0"/></svg> */}
                </div>
                {/* <div class="meter">
                  <span style="width: 25%"></span>
                </div>*/}
              </footer>
              
            </div>

            {/* <a href="https://dribbble.com/shots/2738907-PayPal-Email-Receipt" target="_blank" class="link">Built from reference: Vladyslav Tyzun's Dribbble shot, completed for Awesomed</a> */}

            {/* <button class="button" type="button" onclick="restart()">Replay</button> */}
            
            {/* <br></br>
            <div class="meter">
                <span style="width: 25%"></span>
            </div> */}
            </>
        );
    }
}

export default Checkout;