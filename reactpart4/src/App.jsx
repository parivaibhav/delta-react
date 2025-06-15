import React from "react";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  const winCondition = (ticket) => sum(ticket) === 13;

  return (
    <div>
      <h1>Lottery Game</h1>
      <Lottery n={3} winningCondition={winCondition} />
    </div>
  );
}

export default App;
