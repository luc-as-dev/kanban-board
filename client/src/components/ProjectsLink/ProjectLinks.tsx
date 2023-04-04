import "./ProjectLinks.scss";
import { useState } from "react";
import { useBoardsContext } from "../../context/BoardsContext";
import { PlusSquare, Square } from "react-feather";

export default function ProjectLinks() {
  const { projects, createProject, currentProject, changeBoard } =
    useBoardsContext();

  const [showCreateProject, setShowCreateProject] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  function newBoardSubmitHandler(e: any) {
    e.preventDefault();
    if (projectName.trim().length > 0) {
      createProject(projectName.trim());
      setProjectName("");
      setShowCreateProject(false);
    }
  }
  return (
    <div className="project-links">
      <ul className="project-links-items">
        {projects.map((project, index) => (
          <li
            className={project.name === currentProject.name ? "active" : ""}
            key={index}
            onClick={() => changeBoard(index)}
          >
            <Square />
            {project.name}
          </li>
        ))}
        <li onClick={() => setShowCreateProject(!showCreateProject)}>
          <PlusSquare />
          Create new board
        </li>
      </ul>
      {showCreateProject && (
        <form action="" onSubmit={newBoardSubmitHandler}>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </form>
      )}
    </div>
  );
}
