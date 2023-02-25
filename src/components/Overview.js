// Display tasks

import React from "react";
import { Component } from "react";

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
          id="newTask"
          name="myInput"
          value={this.props.value}
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

export { Input, Submit };
