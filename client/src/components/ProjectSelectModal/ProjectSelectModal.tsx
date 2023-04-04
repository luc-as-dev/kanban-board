import { useBoardsContext } from "../../context/BoardsContext";
import Modal from "../Modal/Modal";
import ProjectLinks from "../ProjectsLink/ProjectLinks";
import "./ProjectSelectModal.scss";

type Props = {
  toggleShowProjectSelect: () => void;
};

export default function ProjectSelectModal({ toggleShowProjectSelect }: Props) {
  const { projects } = useBoardsContext();

  return (
    <Modal className="project-select-modal" onClose={toggleShowProjectSelect}>
      <h3>ALL BOARDS ({projects.length})</h3>
      <ProjectLinks />
    </Modal>
  );
}
