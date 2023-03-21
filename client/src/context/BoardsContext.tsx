import { createContext, ReactNode, useContext, useState } from "react";
import { IProject, projectsData } from "./projects-data";

interface Context {
  projects: IProject[];
  currentProject: IProject;
  createProject: (name: string) => void;
  changeBoard: (index: number) => void;
}

export const boardsContext = createContext<Context>({
  projects: [],
  currentProject: {} as IProject,
  createProject: () => {},
  changeBoard: () => {},
});

export function useBoardsContext() {
  return useContext(boardsContext);
}

type Props = {
  children: ReactNode;
};

export default function BoardsContextProvider({ children }: Props) {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  return (
    <boardsContext.Provider
      value={{ projects, currentProject, createProject, changeBoard }}
    >
      {children}
    </boardsContext.Provider>
  );
}
