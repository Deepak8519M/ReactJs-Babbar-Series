import React from "react";

function App() {
  const handleClick = () => {
    alert("I am Clicked");
  };

  const handleMouseOver = () => {
    alert("handleMouseOver is being done");
  };

  const handleInputChange = () => {
    console.log("Good");
  };
  return (
    <div>
      <form>
        <input type="text" onChange={handleInputChange} />
      </form>

      {/* <p onMouseOver={handleMouseOver}>I am Para Tag</p>
      <button onClick={handleClick}>Event Handling</button> */}
    </div>
  );
}

export default App;
