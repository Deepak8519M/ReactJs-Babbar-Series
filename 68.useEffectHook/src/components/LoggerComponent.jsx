import React, { useEffect, useState } from "react";

function LoggerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered count changed : ", count);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LoggerComponent;
