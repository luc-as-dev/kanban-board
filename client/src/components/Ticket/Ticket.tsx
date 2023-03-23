import React from "react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { ITicket } from "../../context/projects-data";
import "./Ticket.scss";

type Props = {
  ticket: ITicket;
  index: number;
};

export default function Ticket({ ticket, index }: Props) {
  return (
    <>
      <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
        {(provided, snapshot) => (
          <div
            className="ticket"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>{ticket.subtasks.length} Subtasks</p>
          </div>
        )}
      </Draggable>
    </>
  );
}
