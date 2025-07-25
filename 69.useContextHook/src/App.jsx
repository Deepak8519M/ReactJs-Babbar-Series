import React, { createContext, useContext, useState } from "react";
import ChildA from "./components/ChildA";

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // const [value, setValue] = useState("Hello this is UserContext");
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ChildA />
      </ThemeContext.Provider>
    </>
  );
}

export default App;

export { ThemeContext };
