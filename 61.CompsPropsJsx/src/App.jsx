import React from "react";
import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [state, setState] = useState(true);
  return (
    <div>
      {state ? (
        <div className="container">
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      ) : (
        <h1>React Comps</h1>
      )}
    </div>
  );
}

export default App;
