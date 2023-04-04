import { ReactNode } from "react";
import "./Modal.scss";
import { X } from "react-feather";

type Props = {
  children: ReactNode;
  onClose: () => void;
  className?: string;
};

export default function Modal({ children, onClose, className }: Props) {
  return (
    <div className="modal">
      <div className={`modal-card ${className || ""}`.trim()}>
        <div className="modal-card-close" onClick={onClose}>
          <X />
        </div>
        {children}
      </div>
    </div>
  );
}
