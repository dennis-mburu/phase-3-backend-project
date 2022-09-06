import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  borderRadius: "15px", 
};

function NavBar() {
  return (
    <div className="Navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/all-tasks"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        All Tasks
      </NavLink>

      <NavLink
        to="/daily"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Daily Tasks
      </NavLink>

      <NavLink
        to="/finances"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Work & Finances
      </NavLink>

      <NavLink
        to="/mind-care"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Mind-Care & Self-Growth
      </NavLink>

      <NavLink
        to="/social-life"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Social Life
      </NavLink>

      <NavLink
        to="/add-task"
        exact
        style={linkStyles}
        activeStyle={{
        background: "black",
        }}
      >
        <em><strong>Add New Task</strong></em>
      </NavLink>
    </div>
  );
}

export default NavBar;