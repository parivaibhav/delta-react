import React from "react";

function Ticket({ ticket }) {
  return (
    <div>
      {ticket.map((num, idx) => (
        <span key={idx}>{num} </span>
      ))}
    </div>
  );
}

export default Ticket;
