import React from "react";

export default function GameInfo({ move, winner }) {
  let message = "";
  if (winner !== "") {
    message = `Winner is: ${winner}`;
  } else {
    message = `Next Player: ${move % 2 === 0 ? "O" : "X"}`;
  }
  return (
    <>
      <div className="status">{message}</div>
    </>
  );
}
