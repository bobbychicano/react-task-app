import { React, Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: props.selectedTask.taskName,
      editMode: props.editMode,
    };
  }

  handleChange = (e) => {
    this.setState((...prevState) => ({
      ...prevState,
      textValue: e.target.value,
    }));
  };

  render() {
    return (
      <div id="edit-form">
        <form noValidate={true} onSubmit={this.props.handleSave}>
          <h2>Edit task</h2>
          <label>Current task being edited</label>
          <input
            type="text"
            name="editInput"
            value={this.state.textValue}
            onChange={this.state.handleChange}
          ></input>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
