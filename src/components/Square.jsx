import React from "react";

export default function Square({ value, changeValue, index, winner }) {
  return (
    <>
      <button
        onClick={() => {
          if (value === "" && winner === "") {
            changeValue(index);
          }
        }}
        className="square"
      >
        {value}
      </button>
    </>
  );
}
