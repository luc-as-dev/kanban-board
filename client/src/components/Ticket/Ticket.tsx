import { Draggable } from "react-beautiful-dnd";
import { ITicket } from "../../context/projects-data";
import "./Ticket.scss";
import { useState } from "react";

type Props = {
  ticket: ITicket;
  index: number;
};

export default function Ticket({ ticket, index }: Props) {
  const [showSubtasks, setShowSubtasks] = useState<boolean>(false);

  return (
    <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
      {(provided) => (
        <div
          className="ticket"
          ref={provided.innerRef}
          onClick={() => {
            setShowSubtasks((s) => !s);
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          <p>{ticket.subtasks.length} Subtasks</p>
          {showSubtasks && ticket.subtasks.length !== 0 && (
            <ul>
              {ticket.subtasks.map((subtask, index) => (
                <li key={index}>{subtask}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Draggable>
  );
}
