import React from "react";
import { shallow } from "enzyme";
import InfoItem from "./InfoItem";

describe("InfoItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InfoItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
