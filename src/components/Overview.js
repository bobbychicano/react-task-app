import React from "react";
import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <label for="newTask">Task: </label>
        <input
          type="text"
          size="40"
          id="newTask"
          name="myInput"
          value={this.props.value.text}
          placeholder="Type a task here..."
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

class Submit extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
        Submit
      </button>
    );
  }
}

export { Input, Submit };
