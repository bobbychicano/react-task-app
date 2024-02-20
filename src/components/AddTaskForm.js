import { React, Component } from "react";

class AddTaskForm extends Component {
  render() {
    return (
      <div>
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
          <button>Add new task</button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
