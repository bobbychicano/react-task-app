// Logic and state

import "./App.css";
import React from "react";
import { Input, Submit } from "./components/Overview.js";

function App() {
  return (
    <div className="App">
      <Input value="Some text" />
      <Submit />
    </div>
  );
}

export default App;
