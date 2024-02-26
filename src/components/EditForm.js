import { React, Component } from "react";

class EditForm extends Component {
  constructor() {
    super();
    this.state = { textValue: "", editMode: this.props.editMode };
  }

  handleChange = (e) => {
    this.setState((...prevState) => ({
      ...prevState,
      textValue: e.target.value,
    }));
  };

  handleSave = () => {
    this.setState({ editMode: false });
  };

  render() {
    return (
      <div id="edit-form">
        <form noValidate={true} onSubmit={this.handleSave}>
          <h2>Edit task</h2>
          <label>Current task being edited</label>
          <input
            type="text"
            name="editInput"
            value={this.props.initialValue}
            onChange={this.handleChange}
          ></input>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
