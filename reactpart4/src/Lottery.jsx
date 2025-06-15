import React, { useState, useEffect } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

function Lottery({ n, winningCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));

  useEffect(() => {
    console.log("Ticket updated:", ticket);
  }, [ticket]);

  const isWinning = winningCondition(ticket);

  const buyTicket = () => {
    const newTicket = genTicket(n);
    console.log("New Ticket:", newTicket);
    setTicket(newTicket);
  };

  return (
    <div>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      {isWinning && <div>You Win!</div>}
    </div>
  );
}

export default Lottery;
