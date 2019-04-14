import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

class Button extends React.PureComponent {
  onClick = () => {
    this.props.onClick();
  };

  render = () => {
    return (
      <div
        key="button"
        onClick={this.onClick}
        style={{ marginBottom: "0.2rem", ...this.props.style }}
        className="button button-primary"
      >
        {this.props.children || "Button"}
      </div>
    );
  };
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default Button;
