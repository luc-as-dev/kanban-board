import { useBoardsContext } from "../../context/BoardsContext";
import ProjectLinks from "../ProjectsLink/ProjectLinks";
import "./Sidebar.scss";

export default function Sidebar() {
  const { projects } = useBoardsContext();

  return (
    <div className="sidebar">
      <p>ALL BOARDS ( {projects.length} )</p>
      <ProjectLinks />
    </div>
  );
}
