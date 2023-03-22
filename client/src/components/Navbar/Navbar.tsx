import React from "react";
import { useBoardsContext } from "../../context/BoardsContext";
import "./Navbar.scss";

export default function Navbar() {
  const { currentProject } = useBoardsContext();

  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <h1>Kanban</h1>
      </div>
      <div className="navbar-items">
        <h4>{currentProject.name}</h4>
        <button className="btn">Add new task</button>
      </div>
    </div>
  );
}
