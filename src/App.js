import { React, Component } from "react";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";

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
    this.setState({
      list: this.state.list.concat(this.state.value),
      value: { text: "" },
    });
  };

  render() {
    const { taskData, value } = this.state.taskData;
    const handleChange = this.handleChange;

    return (
      <div className="App">
        {/* <Input value={this.state.value.text} onChange={this.handleChange} />
        <Submit onClick={this.handleSubmit} /> */}
        <AddTaskForm textValue={value} onChange={handleChange} />
        <TaskList tasksArray={taskData} />
      </div>
    );
  }
}

export default App;
