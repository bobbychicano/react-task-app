// Logic and state

import React from "react";
import { Input, Submit, TaskList } from "./components/Overview.js";

function App() {
  // state variables go here?
  // Why would the state of the value be here? So that it flows down to its child component and what?

  return (
    <div className="App">
      <Input />
      <Submit />
      <TaskList task="An Array" />
    </div>
  );
}

export default App;
