import React from "react";
import { X } from "react-feather";
import "./CreateTicketModal.scss";

type Props = {
  toggleShowCreateTicket: () => void;
};

export const CreateTicketModal = ({ toggleShowCreateTicket }: Props) => {
  return (
    <div className="create-ticket-modal">
      <form className="create-ticket-modal-card">
        <div
          className="create-ticket-modal-card-close"
          onClick={toggleShowCreateTicket}
        >
          <X />
        </div>
      </form>
    </div>
  );
};
