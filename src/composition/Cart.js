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
        <Total
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </section>
    );
  }
}

export default Cart;
