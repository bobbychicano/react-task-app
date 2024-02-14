import { React, Component } from "react";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskData: [],
      value: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ ...prevState, value: e.target.value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      taskData: [
        ...prevState.taskData,
        { id: prevState.taskData.length + 1, taskName: this.state.value },
      ],
      value: "",
    }));
  };

  render() {
    const { taskData, value } = this.state;
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    return (
      <div id="app">
        {/* <Input value={this.state.value.text} onChange={this.handleChange} />
        <Submit onClick={this.handleSubmit} /> */}
        <AddTaskForm
          textValue={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <TaskList tasksArray={taskData} />
      </div>
    );
  }
}

export default App;
