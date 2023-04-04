import React from "react";
import { useBoardsContext } from "../../context/BoardsContext";
import "./Navbar.scss";
import { ChevronDown } from "react-feather";

type Props = {
  toggleShowCreateTicket: () => void;
  toggleShowProjectSelect: () => void;
};

export default function Navbar({
  toggleShowCreateTicket,
  toggleShowProjectSelect,
}: Props) {
  const { currentProject } = useBoardsContext();

  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <h1>Kanban</h1>
      </div>
      <div className="navbar-items">
        <div
          className="navbar-items-project"
          onClick={() => {
            if (window.innerWidth < 800) toggleShowProjectSelect();
          }}
        >
          <h4>{currentProject.name}</h4>
          <ChevronDown />
        </div>
        <button className="btn" onClick={toggleShowCreateTicket}>
          Add new task
        </button>
      </div>
    </div>
  );
}
