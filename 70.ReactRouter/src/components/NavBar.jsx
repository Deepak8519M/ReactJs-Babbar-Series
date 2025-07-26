import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
