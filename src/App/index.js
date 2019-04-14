import React, { Component } from "react";
import List from "../Components/List";
import Button from "../Components/Button";
import InputAndButton from "../Components/InputAndButton";

class App extends Component {
  getItemToList = () => {
    // return <div>List Item</div>;
    return <InputAndButton onClickHandler={this.buttonOnClickHandler} />;
  };

  buttonOnClickHandler = inputValue => {
    console.log(inputValue);
  };

  render() {
    return (
      <div>
        <h1>Test App</h1>
        <hr />
        <h2>Component: Button</h2>
        <Button
          style={{ marginRight: "0.2rem" }}
          onClick={() => console.log("Button Clicked")}
        />
        <Button
          style={{ marginRight: "0.2rem", marginLeft: "0.2rem" }}
          onClick={() => console.log("Button Clicked")}
        >
          {" "}
          Custom Content{" "}
        </Button>
        <Button
          style={{
            marginLeft: "0.2rem",
            backgroundColor: "#0f004b",
            borderColor: "#0f004b"
          }}
          onClick={() => console.log("Button Clicked")}
        >
          {" "}
          Custom Style{" "}
        </Button>
        <hr />
        <h2>Component: InputAndButton</h2>
        <InputAndButton onClickHandler={this.buttonOnClickHandler} />
        <hr />
        <h2>Component: List</h2>
        <List itemsToList={this.getItemToList()} />
        <hr />
      </div>
    );
  }
}

export default App;
