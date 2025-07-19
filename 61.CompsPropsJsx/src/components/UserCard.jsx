import React from "react";
import "./UserCard.css";

function UserCard() {
  return (
    <div className="user-container">
      <p id="user-name">Deepak</p>
      <img
        id="user-img"
        src="https://images.unsplash.com/photo-1741762764258-8f9348bdf186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <p id="user-desc">Description of Deepak</p>
    </div>
  );
}

export default UserCard;
