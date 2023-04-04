import React, { useState } from "react";
import Board from "./components/Board/Board";
import { CreateTicketModal } from "./components/CreateTicketModal/CreateTicketModal";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProjectSelectModal from "./components/ProjectSelectModal/ProjectSelectModal";

export default function App() {
  const [showCreateTicket, setShowCreateTicket] = useState(false);
  const [showProjectSelect, setShowProjectSelect] = useState(false);

  function toggleShowCreateTicket() {
    setShowCreateTicket(!showCreateTicket);
  }

  function toggleShowProjectSelect() {
    setShowProjectSelect(!showProjectSelect);
  }

  return (
    <div className="app">
      <Navbar
        toggleShowCreateTicket={toggleShowCreateTicket}
        toggleShowProjectSelect={toggleShowProjectSelect}
      />
      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      {showCreateTicket && (
        <CreateTicketModal toggleShowCreateTicket={toggleShowCreateTicket} />
      )}
      {showProjectSelect && (
        <ProjectSelectModal toggleShowProjectSelect={toggleShowProjectSelect} />
      )}
    </div>
  );
}
