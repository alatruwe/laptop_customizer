import React from "react";
import "./App.css";
import NavBar from "./composition/NavBar";
import FeatureList from "./composition/FeatureList";
import Cart from "./composition/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700,
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200,
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98,
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500,
        },
      },
    };
    this.USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <FeatureList
            selected={this.state.selected}
            USCurrencyFormat={this.USCurrencyFormat}
            handleUpdate={this.updateFeature}
          />
          <Cart
            selected={this.state.selected}
            USCurrencyFormat={this.USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;
