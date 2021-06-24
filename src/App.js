import React from "react";
import Button from "./components/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="buttons"></div>
      <Button size="large">Button</Button>
      <Button>Button</Button>
      <Button size="small">Button</Button>
    </div>
  );
}

export default App;
