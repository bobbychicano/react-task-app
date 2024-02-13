import { React, Component } from "react";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskData: [],
    };
  }

  // { taskId: "", taskName: "" }

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
    const taskData = this.state.taskData;

    return (
      <div className="App">
        {/* <Input value={this.state.value.text} onChange={this.handleChange} />
        <Submit onClick={this.handleSubmit} /> */}
        <AddTaskForm />
        <TaskList tasksArray={taskData} />
      </div>
    );
  }
}

export default App;
