import React from "react";
import "./App.css";
import NavBar from "./composition/NavBar";
import LaptopOptions from "./composition/LaptopOptions";
import Cart from "./composition/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "",
          cost: 0,
        },
        "Operating System": {
          name: "",
          cost: 0,
        },
        "Video Card": {
          name: "",
          cost: 0,
        },
        Display: {
          name: "",
          cost: 0,
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
          <LaptopOptions
            selected={this.state.selected}
            USCurrencyFormat={this.USCurrencyFormat}
            handleUpdate={(feature, newValue) =>
              this.updateFeature(feature, newValue)
            }
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
