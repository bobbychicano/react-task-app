import { React, Component } from "react";
import "./AddTaskForm.css";

class AddTaskForm extends Component {
  render() {
    return (
      <div id="addTask">
        <form noValidate={true} onSubmit={this.props.onSubmit}>
          <h2>Add a new task</h2>
          <input
            type="text"
            size="30"
            name="taskInput"
            value={this.props.textValue}
            placeholder="Enter a new task here..."
            onChange={this.props.onChange}
          ></input>
          {/* <textarea name="text" rows="10" cols="10"></textarea> */}
          <button>Add new task</button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
