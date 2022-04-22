import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("number of events is changed in input", () => {
    const eventsInput = { target: { value: 32 } };
    NumberOfEventsWrapper.find(".number-of-events").simulate(
      "change",
      eventsInput
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  
});

