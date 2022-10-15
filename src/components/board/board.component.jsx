import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import "./board.css";

const Board = (props) => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [wins, setWins] = useState({ x: 0, o: 0 });

  const changeState = (index) => {
    if (cells[index] !== "") {
      return;
    }
    cells[index] = turn;
    const newCells = [...cells];
    newCells[index] = turn;
    setTurn((t) => (t === "X" ? "O" : "X"));

    const result = evaluate(newCells);

    console.log(result);
    if (result === "X") {
      setWins(...wins, (wins.x = wins.x + 1));
      clearAll();
    } else if (result === "O") {
      setWins(...wins, (wins.o = wins.o + 1));
      clearAll();
    }
  };

  const clearAll = () => {
    setCells(Array(9).fill(""));
    setTurn("X");
  };

  const evaluate = (board) => {
    if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
      return board[0];
    } else if (
      board[0] !== "" &&
      board[0] === board[3] &&
      board[3] === board[6]
    ) {
      return board[0];
    } else if (
      board[0] !== "" &&
      board[0] === board[4] &&
      board[4] === board[8]
    ) {
      return board[0];
    } else if (
      board[1] !== "" &&
      board[1] === board[4] &&
      board[4] === board[7]
    ) {
      return board[1];
    } else if (
      board[2] !== "" &&
      board[2] === board[5] &&
      board[5] === board[8]
    ) {
      return board[2];
    } else if (
      board[3] !== "" &&
      board[3] === board[4] &&
      board[4] === board[5]
    ) {
      return board[3];
    } else if (
      board[6] !== "" &&
      board[6] === board[7] &&
      board[7] === board[8]
    ) {
      return board[6];
    } else if (
      board[2] !== "" &&
      board[2] === board[4] &&
      board[4] === board[6]
    ) {
      return board[2];
    } else {
      return "";
    }
  };

  return (
    <div className="board">
      {cells.map(function (item, index) {
        return (
          <button
            className="cell"
            onClick={() => changeState(index)}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Board;
