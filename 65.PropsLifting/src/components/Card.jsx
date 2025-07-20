import React from "react";

function Card({ name, setName, title }) {
  return (
    <div className="card">
      <p>{title}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Changes Made : {name}</p>
    </div>
  );
}

export default Card;
