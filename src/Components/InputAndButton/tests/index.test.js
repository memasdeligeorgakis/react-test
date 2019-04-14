import React from "react";
import { mount } from "enzyme";
import InputAndButton from "../index";
import Button from "../../Button";

describe("<InputAndButton />", () => {
  it("Should renders the Input and Button", () => {
    const wrapper = mount(<InputAndButton />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Should react to button click", () => {
    const onClickHandler = jest.fn();
    const wrapper = mount(<InputAndButton onClickHandler={onClickHandler} />);
    const input = wrapper.find("input");
    const button = wrapper.find(Button);
    const textToType = "text in input";
    input.simulate("change", { target: { value: textToType } });
    button.simulate("click");
    expect(onClickHandler).toHaveBeenCalledWith(textToType);
  });
});
