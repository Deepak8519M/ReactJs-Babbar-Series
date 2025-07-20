import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  // create State
  // manage State
  // update State

  const [name, setName] = useState("");

  return (
    <div className="wrapper">
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
      <p>I am inside Parent Comp and the value is = {name}</p>
    </div>
  );
}

export default App;
