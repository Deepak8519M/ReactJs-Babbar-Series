import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <Logout setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
