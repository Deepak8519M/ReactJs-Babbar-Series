import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  const handler = () => [navigate("/")];
  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={handler}>Move to About Page</button>
      <Outlet />
    </div>
  );
};

export default DashBoard;
