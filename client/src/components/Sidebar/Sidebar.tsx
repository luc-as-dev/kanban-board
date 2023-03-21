import React, { useState } from "react";
import { Square, PlusSquare } from "react-feather";
import { useBoardsContext } from "../../context/BoardsContext";
import "./Sidebar.scss";

type Props = {};

export default function Sidebar({}: Props) {
  const { projects, createProject, currentProject, changeBoard } =
    useBoardsContext();
  const [showCreateProject, setShowCreateProject] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  return (
    <div className="sidebar">
      <p>ALL BOARDS ( {projects.length} )</p>
      <ul className="sidebar-items">
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
    </div>
  );
}
