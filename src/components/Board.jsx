import React from "react";
import Square from "./Square";
import { useState } from "react";

export default function Board({ move, setMove, setWinner, winner }) {
  const [boardState, setBoardState] = useState(new Array(9).fill(""));

  const changeValue = (index) => {
    const newArray = boardState.slice();
    newArray[index] = move % 2 === 0 ? "O" : "X";
    setBoardState(newArray);
    setMove(move + 1);
    checkWinner(newArray);
  };

  const checkWinner = (newState) => {
    const winingCobinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winingCobinations.length; i++) {
      const [i1, i2, i3] = winingCobinations[i];
      if (
        newState[i1] !== "" &&
        newState[i1] === newState[i2] &&
        newState[i2] === newState[i3]
      ) {
        setWinner(newState[i1]);
        break;
      }
    }
  };

  return (
    <>
      <div className="board-row">
        <Square
          winner={winner}
          index={0}
          changeValue={changeValue}
          value={boardState[0]}
        />
        <Square
          winner={winner}
          index={1}
          changeValue={changeValue}
          value={boardState[1]}
        />
        <Square
          winner={winner}
          index={2}
          changeValue={changeValue}
          value={boardState[2]}
        />
      </div>
      <div className="board-row">
        <Square
          winner={winner}
          index={3}
          changeValue={changeValue}
          value={boardState[3]}
        />
        <Square
          winner={winner}
          index={4}
          changeValue={changeValue}
          value={boardState[4]}
        />
        <Square
          winner={winner}
          index={5}
          changeValue={changeValue}
          value={boardState[5]}
        />
      </div>
      <div className="board-row">
        <Square
          winner={winner}
          index={6}
          changeValue={changeValue}
          value={boardState[6]}
        />
        <Square
          winner={winner}
          index={7}
          changeValue={changeValue}
          value={boardState[7]}
        />
        <Square
          winner={winner}
          index={8}
          changeValue={changeValue}
          value={boardState[8]}
        />
      </div>
    </>
  );
}
