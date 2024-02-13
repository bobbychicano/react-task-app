import { React, Component } from "react";

class AddTaskForm extends Component {
  render() {
    return (
      <div>
        <h2>Add a new task</h2>
        <input
          type="text"
          // size="40"
          name="taskInput"
          value=""
          placeholder="Enter a new task here..."
          onChange=""
        ></input>
      </div>
    );
  }
}

export default AddTaskForm;
