import React from "react";
import Features from "./Features.js";

export default class LaptopOptions extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
          handleUpdate={this.props.handleUpdate}
        />
      </form>
    );
  }
}
