import React from "react";
import { mount } from "enzyme";
import Button from "../index";

describe("<Button />", () => {
  it('Button Should have the default label "Button"', () => {
    const onClickHandler = () => {};
    const wrapper = mount(<Button onClick={onClickHandler} />);
    let button = wrapper.findWhere(node => node.key() === "button");
    expect(button.text()).toBe("Button");
  });

  it("Button Should have the provided child", () => {
    const onClickHandler = () => {};
    const wrapper = mount(
      <Button onClick={onClickHandler}>
        <div>CustomLabel</div>
      </Button>
    );
    let button = wrapper.findWhere(node => node.key() === "button");
    expect(button.contains(<div>CustomLabel</div>)).toEqual(true);
  });

  it("Button Should call with true if identifier is not provided", () => {
    const onClickHandler = jest.fn();
    const wrapper = mount(<Button onClick={onClickHandler} />);
    let button = wrapper.findWhere(node => node.key() === "button");
    button.simulate("click");
    expect(onClickHandler).toHaveBeenCalled();
  });
});
