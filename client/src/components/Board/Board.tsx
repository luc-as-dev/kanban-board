import React from "react";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";

export default function Board() {
  return (
    <div className="board">
      <div className="board-column">
        <div className="board-column-header">
          <div className="board-column-header-icon todo"></div>
          <h4 className="board-column-header-label">Todo</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <div className="board-column-header">
          <div className="board-column-header-icon doing"></div>
          <h4 className="board-column-header-label">Doing</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <div className="board-column-header">
          <div className="board-column-header-icon done"></div>
          <h4 className="board-column-header-label">Done</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
}
