// Logic and state

import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import { useState } from "react";
import { Input, Submit, TaskList } from "./components/Overview.js";

class App extends Component {
  constructor() {
    super();
    this.state = { value: "", list: [] };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      list: this.state.list.concat(this.state.value),
      value: "",
    });
  };

  render() {
    return (
      <div className="App">
        <Input value={this.state.value} onChange={this.handleChange} />
        <Submit onClick={this.handleSubmit} />
        <TaskList taskList={this.state.list} />
      </div>
    );
  }
}

export default App;
