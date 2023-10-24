import React, { useState } from "react";
import Board from "./Board";
import GameInfo from "./GameInfo";

export default function Game() {
  const [move, setMove] = useState(1);
  const [winner, setWinner] = useState("");
  return (
    <>
      <GameInfo winner={winner} move={move} />
      <Board
        winner={winner}
        setWinner={setWinner}
        move={move}
        setMove={setMove}
      />
    </>
  );
}
