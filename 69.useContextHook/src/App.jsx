import React, { createContext, useState } from "react";
import ChildA from "./components/ChildA";

const UserContext = createContext();

function App() {
  const [value, setValue] = useState("Hello this is UserContext");
  return (
    <>
      <UserContext.Provider value={{ value, setValue }}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
