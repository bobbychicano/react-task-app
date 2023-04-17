/* eslint-disable no-useless-constructor */
// Display tasks

import React from "react";
import { Component } from "react";
import { useState } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label for="newTask">Task: </label>
        <input
          type="text"
          size="40"
          id="newTask"
          name="myInput"
          value={this.props.value}
          placeholder="Type a task here..."
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

class Submit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
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
        <ul>{this.props.taskList}</ul>
      </div>
    );
  }
}

export { Input, Submit, TaskList };
