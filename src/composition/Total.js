import React from "react";

export default class Total extends React.Component {
  render() {
    const { selected } = this.props;
    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );
    return <div>{this.props.USCurrencyFormat.format(total)}</div>;
  }
}
