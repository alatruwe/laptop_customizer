import React from "react";
import Summary from "./Summary";
import Total from "./Total";

class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            <Total
              selected={this.props.selected}
              USCurrencyFormat={this.props.USCurrencyFormat}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
