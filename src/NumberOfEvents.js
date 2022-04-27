import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChange = (event) => {
    const value = event.target.value;

    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: "",
        infoText: "Please enter a number between 1 from 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.infoText} />

        <input
          className="number-of-events"
          type="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
