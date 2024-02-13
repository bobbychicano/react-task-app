import { React, Component } from "react";

class AddTaskForm extends Component {
  render() {
    return (
      <div>
        <form novalidate="true" onSubmit={(e) => e.preventDefault()}>
          <h2>Add a new task</h2>
          <input
            type="text"
            // size="40"
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

// If I manage the input value here with it's own independent state, then how would I get that value to the state array of tasks? I vaguely remember that the parent component should have the state instead since the parent componend will be sharing that state with other components.
