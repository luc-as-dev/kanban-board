import React, { useState } from "react";
import { X } from "react-feather";
import { useBoardsContext } from "../../context/BoardsContext";
import "./CreateTicketModal.scss";
import Modal from "../Modal/Modal";

type Props = {
  toggleShowCreateTicket: () => void;
};

export const CreateTicketModal = ({ toggleShowCreateTicket }: Props) => {
  const { createTicket } = useBoardsContext();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<number>(0);
  const [subtasks, setSubtasks] = useState<string[]>([""]);

  function createTicketHandler() {
    createTicket(
      title,
      description,
      status,
      subtasks.filter((s) => s !== "")
    );
    toggleShowCreateTicket();
  }

  return (
    <Modal className="create-ticket-modal" onClose={toggleShowCreateTicket}>
      <h3 className="create-ticket-modal-title">Create new ticket</h3>
      <div className="create-ticket-modal-content">
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

        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(+e.target.value)}
        >
          <option value="0">Todo</option>
          <option value="1">Doing</option>
          <option value="2">Done</option>
        </select>

        <div className="create-ticket-modal-divider"></div>

        <label>Subtasks</label>
        {subtasks.map((task, index) => (
          <div key={index} className="create-ticket-modal-content-subtask">
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
      </div>

      <div className="create-ticket-modal-divider"></div>

      <button className="btn" onClick={createTicketHandler}>
        Create Ticket
      </button>
    </Modal>
  );
};
