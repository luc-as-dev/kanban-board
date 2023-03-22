import React from "react";
import { X } from "react-feather";
import "./CreateTaskModal.scss";

type Props = {};

export const CreateTaskModal = (props: Props) => {
  return (
    <div className="create-task-modal">
      <form className="create-task-modal-card">
        <div className="create-task-modal-card-close">
          <X />
        </div>
      </form>
    </div>
  );
};
