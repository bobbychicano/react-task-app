import { React, Component } from "react";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";
import EditForm from "./components/EditForm.js";
import "./App.css";
import ToyotaSripes from "./assets/toyota-classic-heritage-stripes-small.jpg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskData: [],
      value: "",
      editMode: false,
      selectedTask: {},
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

  handleEdit = (taskFromChild) => {
    this.setState((prevState) => ({
      ...prevState,
      editMode: true,
      selectedTask: { id: taskFromChild.id, taskName: taskFromChild.taskName },
    }));
  };

  //kept getting a typeError that map couldnt be run on undefined because I included the spread operator in the very first variable for this.setState. So '...prevState' instead of 'prevState'.
  handleSave = (taskFromEdit) => {
    this.setState((prevState) => ({
      ...prevState,
      taskData: [
        ...prevState.taskData.map((taskObject) => {
          if (taskObject.id === this.state.selectedTask.id) {
            return { id: taskObject.id, taskName: taskFromEdit };
          }
          return taskObject;
        }),
      ],
      editMode: false,
      selectedTask: {},
    }));
  };

  render() {
    const { taskData, value, editMode, selectedTask } = this.state;
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    const handleDelete = this.handleDelete;
    const handleEdit = this.handleEdit;
    const handleSave = this.handleSave;

    return (
      <div id="app">
        <div class="title-elements">
          <div class="toyota-container">
            <div class="logo">
              <img src={ToyotaSripes} alt="" />
            </div>
            <div class="app-title">
              <h1>TOYOTA</h1>
              <h2>Task List</h2>
            </div>
          </div>
          <p class="vehicle-info">2000 Toyota 4Runner SR5 V6 2WD</p>
        </div>

        {editMode ? (
          <EditForm
            taskData={taskData}
            editMode={editMode}
            selectedTask={selectedTask}
            onSave={handleSave}
          />
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
