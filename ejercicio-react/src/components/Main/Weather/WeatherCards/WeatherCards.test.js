import React from "react";
import { shallow } from "enzyme";
import WeatherCards from "./WeatherCards";

describe("WeatherCards", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
