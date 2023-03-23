import React, { useState } from "react";
import Board from "./components/Board/Board";
import { CreateTicketModal } from "./components/CreateTicketModal/CreateTicketModal";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const [showCreateTicket, setShowCreateTicket] = useState(false);

  function toggleShowCreateTicket() {
    setShowCreateTicket(!showCreateTicket);
  }

  return (
    <div className="app">
      <Navbar toggleShowCreateTicket={toggleShowCreateTicket} />
      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      {showCreateTicket && (
        <CreateTicketModal toggleShowCreateTicket={toggleShowCreateTicket} />
      )}
    </div>
  );
}
