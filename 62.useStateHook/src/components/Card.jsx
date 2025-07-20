import React, { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h1>You have Clicked {count} times</h1>
      <button onClick={() => setCount(++count)} className="btn">
        Click
      </button>
    </div>
  );
}

export default Card;
