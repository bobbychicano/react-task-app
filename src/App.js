// Logic and state

import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import { useState } from "react";
import { Input, Submit, TaskList } from "./components/Overview.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Input value={this.state.value} onChange={this.handleChange} />
        <Submit />
        <TaskList task="An Array" />
      </div>
    );
  }
}

export default App;
