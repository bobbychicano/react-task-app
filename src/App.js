import { React, Component } from "react";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";
import EditForm from "./components/EditForm.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskData: [],
      value: "",
      editMode: false,      
      selectedTask: ,
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => ({ ...prevState, value: e.target.value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      taskData: [
        ...prevState.taskData,
        { id: prevState.taskData.length + 1, taskName: this.state.value },
      ],
      value: "",
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      taskData: [...prevState.taskData.filter((task) => task.id !== id)],
    }));
  };

  handleEdit = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      editMode: true,
    }));
  };

  render() {
    const { taskData, value, editMode } = this.state;
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    const handleDelete = this.handleDelete;
    const handleEdit = this.handleEdit;

    return (
      <div id="app">
        {editMode ? (
          <EditForm taskData={taskData} editMode={editMode} />
        ) : (
          <AddTaskForm
            textValue={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}

        <TaskList
          tasksArray={taskData}
          deleteTask={handleDelete}
          editTask={handleEdit}
        />
      </div>
    );
  }
}

export default App;
