import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./style.scss";

class List extends React.PureComponent {
  /**
   * Initial state
   * @type {{countOfItems: number}}
   */
  state = {
    countOfItems: 0
  };

  /**
   * This returns the array of elements for the items to be rendered
   * @param itemToList
   * @returns {Array}
   */
  getItemsToList = itemToList => {
    let listedItems = [];
    for (var index = 0; index < this.state.countOfItems; index++) {
      // const clonedItemWithKey = cloneElement(itemToList, { key: index });
      listedItems.push(
        <span key={index} className="single-item-to-list-container">
          {itemToList}
        </span>
      );
    }
    return <div className="items-to-list-container">{listedItems}</div>;
  };

  /**
   * This is passed as a callback for the buttons to change the count of items to render
   *
   * @param delta
   */
  changeItemCount = (delta = 0) => {
    const { countOfItems: existingCountOfItems } = this.state;
    if (existingCountOfItems + delta < 0) {
      this.setState({ countOfItems: 0 });
      return;
    }
    this.setState({ countOfItems: existingCountOfItems + delta });
  };

  /**
   * This changes the count of the list items
   *
   * @param delta - Indicates the absolute change to the count of the exiting count of items
   * @returns {*} - Returns button with correct label
   */
  getAddRemoveButton = (delta, buttonLabel = "") => {
    const label = buttonLabel;
    const key = buttonLabel.replace(" ", "_").toLowerCase();
    return (
      <Button
        key={key}
        onClick={() => this.changeItemCount(delta)}
        style={{
          marginLeft: "0.2rem",
          backgroundColor: "#636363",
          borderColor: "#636363"
        }}
      >
        {label}
      </Button>
    );
  };

  render = () => {
    const { itemsToList } = this.props;
    return (
      <div>
        {this.getAddRemoveButton(1, "Add 1")}
        {this.getAddRemoveButton(5, "Add 5")}
        {this.getAddRemoveButton(-1, "Remove 1")}
        {this.getAddRemoveButton(-5, "Remove 5")}
        {this.getItemsToList(itemsToList)}
      </div>
    );
  };
}

List.propTypes = {
  itemsToList: PropTypes.node
};

export default List;
