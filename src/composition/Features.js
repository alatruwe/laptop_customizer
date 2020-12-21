import React from "react";
import FeatureItem from "./FeatureItem.js";
import DATA from "./DATA.js";

export default class Features extends React.Component {
  render() {
    const features = Object.keys(DATA).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FeatureItem
            feature={feature}
            selected={this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}
            handleUpdate={this.props.handleUpdate}
          />
        </fieldset>
      );
    });
    return features;
  }
}
