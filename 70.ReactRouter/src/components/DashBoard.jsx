import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  const handler = () => [navigate("/")];
  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={handler}>Move to About Page</button>
    </div>
  );
};

export default DashBoard;
