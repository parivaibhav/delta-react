import React, { useState } from "react";

function LudoBoard() {
  //Objects &State Example
  let [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
  });
  //Array & State Example
  let [arr, setArr] = useState("no moves");

  let updateBlue = () => {
    // console.log(moves.blue);
    // setMoves((prevMoves) => {
    //   return { ...prevMoves, blue: prevMoves.blue + 1 };
    // });

    setArr([...arr, "blue moves"]);
  };

  let updateYellow = () => {
    console.log(moves.blue);
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };

  let updateGreen = () => {
    console.log(moves.blue);
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  let updateRed = () => {
    console.log(moves.blue);
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  return (
    <div>
      <p>This is Ludo Board</p>
      <div className="board">
        <p>{arr}</p>
        <p>Blue Moves :{moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow Moves :{moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green Moves :{moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Moves :{moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}

export default LudoBoard;
