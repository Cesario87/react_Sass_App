import React from "react";
import { shallow } from "enzyme";
import InfoList from "./InfoList";

describe("InfoList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InfoList />);
    expect(wrapper).toMatchSnapshot();
  });
});
