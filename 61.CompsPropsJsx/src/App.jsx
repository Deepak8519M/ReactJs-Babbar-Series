import React from "react";
import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [state, setState] = useState(false);

  const info = [
    {
      name: "Deepak",
      desc: "Hello Myself Deepak iam 20 year old adult",
    },
    {
      name: "Ajay",
      desc: "Hello Myself Ajay iam 20 year old adult",
    },
    {
      name: "Rahul",
      desc: "Hello Myself Rahul iam 20 year old adult",
    },
  ];
  return (
    <div className="layer">
      {state ? (
        <div className="container">
          {info.map((card) => {
            return <UserCard name={card.name} desc={card.desc} />;
          })}
        </div>
      ) : (
        <h1>React Comps</h1>
      )}
    </div>
  );
}

export default App;
