import React from "react";
import { shallow, mount } from "enzyme";
import List from "../index";

describe("<List />", () => {
  it("should render the component without props passed in", () => {
    const listWrapper = mount(<List />);
    expect(listWrapper.exists());
  });

  it("Should not find any items if there was no click", () => {
    const listWrapper = mount(<List itemsToList={<div>item</div>} />);
    const divs = listWrapper.find(".single-item-to-list-container");
    expect(divs).toHaveLength(0);
  });

  it("Should render item at click", () => {
    const listWrapper = mount(<List itemsToList={<div>item</div>} />);
    let buttonToAddOne = listWrapper.findWhere(node => node.key() === "add_1");
    buttonToAddOne.simulate("click");
    const divs = listWrapper.find(".single-item-to-list-container");
    expect(divs).toHaveLength(1);
  });

  it("Should render 5 items at clicking add 5", () => {
    const listWrapper = mount(<List itemsToList={<div>item</div>} />);
    let buttonToAddFive = listWrapper.findWhere(node => node.key() === "add_5");
    let buttonToAddOne = listWrapper.findWhere(node => node.key() === "add_1");
    buttonToAddFive.simulate("click");
    buttonToAddOne.simulate("click");
    const divs = listWrapper.find(".single-item-to-list-container");
    expect(divs).toHaveLength(6);
  });

  it("Should not allow the state to go bellow 0", () => {
    const listWrapper = mount(<List itemsToList={<div>item</div>} />);
    const buttonToAddOne = listWrapper.findWhere(
      node => node.key() === "add_1"
    );
    const buttonToRemoveFive = listWrapper.findWhere(
      node => node.key() === "remove_5"
    );
    buttonToAddOne.simulate("click");
    buttonToRemoveFive.simulate("click");
    const divs = listWrapper.find(".single-item-to-list-container");
    expect(divs).toHaveLength(0);
  });
});
