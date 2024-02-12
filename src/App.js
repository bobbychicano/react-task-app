import { React, Component, useState } from "react";
import { Input, Submit, TaskList } from "./components/Overview.js";

class App extends Component {
  constructor() {
    super();
    this.state = { value: { text: "" }, list: [] };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: { text: e.target.value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      list: this.state.list.concat(this.state.value),
      value: { text: "" },
    });
  };

  render() {
    return (
      <div className="App">
        <Input value={this.state.value.text} onChange={this.handleChange} />
        <Submit onClick={this.handleSubmit} />
        <TaskList taskList={this.state.list} />
      </div>
    );
  }
}

export default App;
