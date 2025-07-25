import React, { useContext } from "react";
import { UserContext } from "../App";

function ChildC() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue("This is Deepak")}>Click</button>
    </div>
  );
}

export default ChildC;
