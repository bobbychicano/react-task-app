// Display tasks

import React from "react";
import { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = "placeholder text";
  }

  saveTask() {
    this.setState(//An Object, or you can use a version of set state that accepts an arrow function);
  }

  render() {
    return (
      <div>
        <label for="newTask">Task: </label>
        <input
          //   onChange=""
          type="text"
          size="40"
          id="newTask"
          name="myInput"
          //   value={this.state}
          onChange={this.saveTask}
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
