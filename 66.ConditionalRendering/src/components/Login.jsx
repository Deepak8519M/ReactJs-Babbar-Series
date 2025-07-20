import React from "react";

function Login({ setLoggedIn }) {
  return (
    <div>
      <button onClick={() => setLoggedIn(false)}>Log In</button>
    </div>
  );
}

export default Login;
