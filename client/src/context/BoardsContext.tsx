import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { IProject, projectsData } from "./projects-data";

interface Context {
  projects: IProject[];
  currentProject: IProject;
  createProject: (name: string) => void;
  changeBoard: (index: number) => void;
  createTicket: (
    title: string,
    description: string,
    status: number,
    subtasks: string[]
  ) => void;
  changeCurrentProjectBoard: (board: IProject["board"]) => void;
}

export const boardsContext = createContext<Context>({
  projects: [],
  currentProject: {} as IProject,
  createProject: () => {},
  changeBoard: () => {},
  createTicket: () => {},
  changeCurrentProjectBoard: (board: IProject["board"]) => {},
});

export function useBoardsContext() {
  return useContext(boardsContext);
}

type Props = {
  children: ReactNode;
};

export default function BoardsContextProvider({ children }: Props) {
  const [projects, setProjects] = useLocalStorage<IProject[]>(
    "project-data",
    projectsData
  );
  const [selectedIndex, setSelectedIndex] = useLocalStorage<number>(
    "selected-index",
    0
  );
  const currentProject = projects[selectedIndex];

  function createProject(name: string) {
    const project = {
      name,
      id: Math.random().toString(),
      board: [
        { name: "Todo", tickets: [] },
        { name: "Doing", tickets: [] },
        { name: "Done", tickets: [] },
      ],
    };
    setProjects([...projects, project]);
    changeBoard(projects.length);
  }

  function changeBoard(index: number) {
    console.log("changeBoard", index);
    setSelectedIndex(index);
  }

  function changeCurrentProjectBoard(board: IProject["board"]) {
    const newProjects = [...projects];
    newProjects[selectedIndex].board = board;

    setProjects(newProjects);
  }

  function createTicket(
    title: string,
    description: string,
    status: number,
    subtasks: string[]
  ) {
    projects[selectedIndex].board[status].tickets.push({
      id: Math.random().toString(),
      title,
      description,
      subtasks,
    });
  }

  return (
    <boardsContext.Provider
      value={{
        projects,
        currentProject,
        createProject,
        changeBoard,
        createTicket,
        changeCurrentProjectBoard,
      }}
    >
      {children}
    </boardsContext.Provider>
  );
}
