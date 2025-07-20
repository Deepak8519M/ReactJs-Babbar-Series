import React, { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="wrapper">
      <Button handleClick={handleClick} count={count} />
      {/* <Card name="Deepak">
        <h1>Best Web Dev Approach</h1>
        <p>Be Consistent</p>
        <p>Be Confident</p>
      </Card>
      <Card>Hello just 2nd Comp Created</Card>
      <Card children="CHILD 1"></Card> */}
    </div>
  );
}

export default App;
