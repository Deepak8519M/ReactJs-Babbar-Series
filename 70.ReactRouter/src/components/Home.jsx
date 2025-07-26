import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handler = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handler}>Move to About Page</button>
    </div>
  );
};

export default Home;
