import React, { createContext } from "react";
import ChildA from "./components/ChildA";

const UserContext = createContext();

function App() {
  return (
    <div>
      <ChildA />
    </div>
  );
}

export default App;
