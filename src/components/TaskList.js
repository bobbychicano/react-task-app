import { React, Component } from "react";
import "./TaskList.css";

class TaskList extends Component {
  render() {
    return (
      <div id="tasks-table">
        <h2>Task List</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!this.props.tasksArray ? (
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ) : (
              this.props.tasksArray.map((task) => {
                return (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.taskName}</td>
                    <td>
                      <button onClick={() => this.props.editTask(task)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.props.deleteTask(task.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;

// Will pass an array of tasks (from state) to be rendered by the task list component
