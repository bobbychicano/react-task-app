// Logic and state

import React from "react";
import { Input, Submit, TaskList } from "./components/Overview.js";

function App() {
  // state variables go here?

  return (
    <div className="App">
      <Input />
      <Submit />
      <TaskList task="An Array" />
    </div>
  );
}

export default App;
