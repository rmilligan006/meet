import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: "",
        infoText:"Please enter a number from 1 to 32"
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText:""
      });
    }
    this.props.updateNumberofEvents(value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p className="numbercount">Number of Events</p>
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