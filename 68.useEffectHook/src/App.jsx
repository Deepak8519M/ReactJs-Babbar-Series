import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    alert("I will show up every time count is rerendered");
  }, [count, total]);

  const handlClick = () => {
    setCount(count + 1);
  };

  const handleTotalClick = () => {
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlClick}>Click</button>
      <br />
      <h1>{total}</h1>
      <button onClick={handleTotalClick}>Click</button>
    </div>
  );
}

export default App;
