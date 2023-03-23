import React, { useState } from "react";
import { X } from "react-feather";
import { useBoardsContext } from "../../context/BoardsContext";
import "./CreateTicketModal.scss";

type Props = {
  toggleShowCreateTicket: () => void;
};

export const CreateTicketModal = ({ toggleShowCreateTicket }: Props) => {
  const { createTicket } = useBoardsContext();
  const [subtasks, setSubtasks] = useState<string[]>([""]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function createTicketHandler() {
    createTicket(
      title,
      description,
      subtasks.filter((s) => s !== "")
    );
    toggleShowCreateTicket();
  }

  return (
    <div className="create-ticket-modal">
      <div className="create-ticket-modal-card">
        <div
          className="create-ticket-modal-card-close"
          onClick={toggleShowCreateTicket}
        >
          <X />
        </div>
        <h3 className="create-ticket-modal-card-title">Create new ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="this is a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="this is a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Subtasks</label>
        {subtasks.map((task, index) => (
          <div key={index} className="create-ticket-modal-card-subtask">
            <input
              type="text"
              placeholder="this is a subtask..."
              value={task}
              onChange={(e) =>
                setSubtasks((prev) => {
                  const tasks = [...prev];
                  tasks[index] = e.target.value;
                  return tasks;
                })
              }
            />
            <X
              onClick={() => {
                setSubtasks((prev) => {
                  const tasks = [...prev];
                  tasks.splice(index, 1);
                  return tasks;
                });
              }}
            />
          </div>
        ))}
        <button className="btn" onClick={() => setSubtasks([...subtasks, ""])}>
          Add subtask
        </button>
        <div className="create-ticket-modal-card-divider"></div>
        <button className="btn" onClick={createTicketHandler}>
          Create Ticket
        </button>
      </div>
    </div>
  );
};
