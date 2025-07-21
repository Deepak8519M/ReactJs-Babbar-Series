import React from "react";

function App() {
  const handleClick = () => {
    alert("I am Clicked");
  };

  const handleMouseOver = () => {
    alert("handleMouseOver is being done");
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" onChange={(e) => handleInputChange(e)} />
      </form>

      {/* <p onMouseOver={handleMouseOver}>I am Para Tag</p>
      <button onClick={handleClick}>Event Handling</button> */}
    </div>
  );
}

export default App;
