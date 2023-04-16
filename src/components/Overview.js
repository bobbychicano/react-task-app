/* eslint-disable no-useless-constructor */
// Display tasks

import React from "react";
import { Component } from "react";
import { useState } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  //   saveTask() {
  //   }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <label for="newTask">Task: </label>
        <input
          type="text"
          size="40"
          id="newTask"
          name="myInput"
          value={this.value}
          placeholder="Type a task here..."
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

class Submit extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <button type="submit" onClick={this.handleClick}>
        Submit
      </button>
    );
  }
}

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{this.props.task}</ul>
      </div>
    );
  }
}

export { Input, Submit, TaskList };
