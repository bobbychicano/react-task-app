import { React, Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTextValue: this.props.selectedTask.taskName,
    };
  }

  handleEditChange = (e) => {
    this.setState({
      editTextValue: e.target.value,
    });
  };

  render() {
    return (
      <div id="edit-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSave(this.state.editTextValue);
          }}
        >
          <h2>Edit task</h2>

          <input
            type="text"
            name="editInput"
            value={this.state.editTextValue}
            onChange={this.handleEditChange}
          ></input>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
