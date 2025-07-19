import React from "react";
import "./UserCard.css";

function UserCard({ name, desc }) {
  return (
    <div className="user-container">
      <p id="user-name">{name}</p>
      <img
        id="user-img"
        src="https://images.unsplash.com/photo-1741762764258-8f9348bdf186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <p id="user-desc">{desc}</p>
    </div>
  );
}

export default UserCard;
