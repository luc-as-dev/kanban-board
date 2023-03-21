import { createContext, ReactNode } from "react";

export const boardsContext = createContext<string[]>([]);

type Props = {
  children: ReactNode;
};

export default function BoardsContextProvider({ children }: Props) {
  const projects = ["test", "test2"];

  return (
    <boardsContext.Provider value={projects}>{children}</boardsContext.Provider>
  );
}
