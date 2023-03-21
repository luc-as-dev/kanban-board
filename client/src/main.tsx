import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BoardsContextProvider from "./context/BoardsContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BoardsContextProvider>
      <App />
    </BoardsContextProvider>
  </React.StrictMode>
);
