import React, { useContext } from "react";
import { ThemeContext } from "../App";

function ChildC() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>{theme}</h1>
    </div>
  );
}

export default ChildC;
