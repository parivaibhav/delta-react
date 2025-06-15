import React, { useState } from "react";

const LotteryGame = () => {
  const [ticket, setTicket] = useState("");
  const [message, setMessage] = useState("");

  const generateTicket = () => {
    // Generate 3 random digits (0-9)
    const digits = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 10)
    );
    const ticketStr = digits.join("");

    // Calculate sum
    const sum = digits.reduce((acc, val) => acc + val, 0);

    // Update state
    setTicket(ticketStr);
    if (sum === 15) {
      setMessage("🎉 Congratulations! You won the lottery!");
    } else {
      setMessage("😢 Sorry! Better luck next time.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>🎲 Lottery Game</h1>
      <button onClick={generateTicket} style={styles.button}>
        Generate Lottery Ticket
      </button>
      {ticket && (
        <h2>
          Your Ticket: <span style={styles.ticket}>{ticket}</span>
        </h2>
      )}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
  ticket: {
    color: "blue",
  },
  message: {
    fontSize: "20px",
    marginTop: "20px",
    color: "green",
  },
};

export default LotteryGame;
