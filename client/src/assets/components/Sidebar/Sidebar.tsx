import React from "react";
import { Square, PlusSquare } from "react-feather";
import "./Sidebar.scss";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="sidebar">
      <p>ALL BOARDS ( 2 )</p>
      <ul className="sidebar-items">
        <li className="active">
          <Square />
          Place Board
        </li>
        <li>
          <Square />
          Place Board
        </li>
        <li>
          <PlusSquare />
          Create new board
        </li>
      </ul>
    </div>
  );
}
