// src/App.js

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import { WarningAlert } from "./Alert";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    NumberOfEvents: 32,
    currentLocation: "all",
    infoText: "",
  };

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({
        events: events.slice(0, this.state.NumberOfEvents),
        locations: extractLocations(events),
      });
    });
    if (!navigator.onLine) {
      this.setState({
        infoText: "You are not connected to the Internet",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const shownEvents = locationEvents.slice(0, this.state.numberOfEvents);
      this.setState({
        events: shownEvents,
        currentLocation: location,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <WarningAlert id="warningAlert" text={this.state.infoText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.NumberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.NumberOfEvents}
        />
      </div>
    );
  }
}

export default App;
