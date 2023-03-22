import React from "react";
import { ITicket } from "../../context/projects-data";
import "./Ticket.scss";

type Props = {
  ticket: ITicket;
};

export default function Ticket({ ticket }: Props) {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>{ticket.tasks.length} Subtasks</p>
    </div>
  );
}
