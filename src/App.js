// src/App.js

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import "./nprogress.css"

class App extends Component {
  state = {
    events: [],
    locations: [],
    NumberOfEvents: 32,
  }

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents,
    });

    this.updateEvents(this.state.locations, numberOfEvents);
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = 
      (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
          numberOfEvents: eventCount,
        });
      }
    });
  }




  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} numberOfEvents={this.state.NumberOfEvents} />
      </div>
    );
  }
}

export default App;