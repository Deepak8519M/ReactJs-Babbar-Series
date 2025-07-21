import React from "react";

function App() {
  const handleClick = () => {
    alert("I am Clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Event Handling</button>
    </div>
  );
}

export default App;
