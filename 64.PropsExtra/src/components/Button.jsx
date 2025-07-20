import React from "react";

function Button({ handleClick, count }) {
  return (
    <div>
      <button style={{ padding: "10px" }} onClick={handleClick}>
        Hello
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default Button;
