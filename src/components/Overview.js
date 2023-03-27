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
  //     this.setState((state, props) => {
  //       //   state + state?
  //     });
  //   }

  render() {
    const { value } = this.state;

    return (
      <div>
        <label for="newTask">Task: </label>
        <input
          type="text"
          size="40"
          id="newTask"
          name="myInput"
          value={value}
          placeholder="Type a task here..."
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
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
    return <button type="submit">Submit</button>;
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
