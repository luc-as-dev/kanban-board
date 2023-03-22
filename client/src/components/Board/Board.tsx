import React from "react";
import { useBoardsContext } from "../../context/BoardsContext";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";

export default function Board() {
  const { currentProject } = useBoardsContext();
  return (
    <div className="board">
      {currentProject.board.map((list) => (
        <div key={list.name} className="board-column">
          <div className="board-column-header">
            <div
              className={`board-column-header-icon ${list.name.toLowerCase()}`}
            ></div>
            <h4 className="board-column-header-label">{list.name}</h4>
          </div>
          {list.tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}
