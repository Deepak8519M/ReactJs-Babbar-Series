import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <Card name="Deepak">
        <h1>Best Web Dev Approach</h1>
        <p>Be Consistent</p>
        <p>Be Confident</p>
      </Card>
      <Card>Hello just 2nd Comp Created</Card>
      <Card children="CHILD 1"></Card>
    </div>
  );
}

export default App;
