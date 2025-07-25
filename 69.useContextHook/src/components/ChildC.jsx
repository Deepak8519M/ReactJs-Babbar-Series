import React, { useContext } from "react";
import { ThemeContext } from "../App";

function ChildC() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Changet Theme</button>
    </div>
  );
}

export default ChildC;
