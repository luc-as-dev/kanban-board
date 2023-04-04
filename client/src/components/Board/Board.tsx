import "./Board.scss";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useBoardsContext } from "../../context/BoardsContext";
import Ticket from "../Ticket/Ticket";

export default function Board() {
  const { currentProject, changeCurrentProjectBoard } = useBoardsContext();

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;

    const { source, destination } = result;

    const board = [...currentProject.board];
    const sourceIndex = board.findIndex(
      (column) => column.name === source.droppableId
    );
    const destinationIndex = board.findIndex(
      (column) => column.name === destination.droppableId
    );
    const [removedTicket] = board[sourceIndex].tickets.splice(source.index, 1);

    board[destinationIndex].tickets.splice(destination.index, 0, removedTicket);
    changeCurrentProjectBoard(board);
  }

  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        {currentProject.board.map((list) => (
          <Droppable key={list.name} droppableId={list.name}>
            {(provided, snapshot) => (
              <div
                className="board-column"
                ref={provided.innerRef}
                key={list.name}
                {...provided.droppableProps}
              >
                <div className="board-column-header">
                  <div
                    className={`board-column-header-icon ${list.name.toLowerCase()}`}
                  ></div>
                  <h4 className="board-column-header-label">{list.name}</h4>
                </div>
                {list.tickets.length > 0 ? (
                  list.tickets.map((ticket, index) => (
                    <Ticket key={ticket.id} ticket={ticket} index={index} />
                  ))
                ) : (
                  <div className="board-column-placeholder">
                    <p>Add ticket to the list by dropping it here</p>
                  </div>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
