import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./style.scss";

class InputAndButton extends React.PureComponent {
  state = { inputValue: "" };

  onChangeHandler = event => {
    this.setState({ inputValue: event.target.value });
  };

  onClickHandler = () => {
    this.props.onClickHandler(this.state.inputValue);
  };

  render = () => {
    return (
      <div className="input-button-container">
        <input
          value={this.state.inputValue}
          onChange={this.onChangeHandler}
          className="input"
        />
        <Button
          onClick={this.onClickHandler}
          style={{ marginLeft: "0.2rem" }}
        />
      </div>
    );
  };
}

InputAndButton.propTypes = {
  onClickHandler: PropTypes.func
};

export default InputAndButton;
