import React from "react";

function Logout({ setLoggedIn }) {
  return (
    <div>
      <button onClick={() => setLoggedIn(true)}>Log Out</button>
    </div>
  );
}

export default Logout;
