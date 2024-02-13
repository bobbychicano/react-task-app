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
              <th scope="col" colSpan={1}>
                Task
              </th>
              <th scope="col" colSpan={1}>
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {!this.props.tasksArray ? (
              <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              this.props.tasksArray.map((task) => {
                return (
                  <tr>
                    <th>{task.id}</th>
                    <td>{task.name}</td>
                    <td>Edit</td>
                    <td>Delete</td>
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
