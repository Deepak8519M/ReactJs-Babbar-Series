import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handler = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={handler}>Move to About Page</button>
    </div>
  );
};

export default About;
