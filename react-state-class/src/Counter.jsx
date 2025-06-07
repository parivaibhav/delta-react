import React, { useState } from "react";

function init() {
  return Math.random();
}

function Counter() {
  let [count, setCount] = useState(init);
  console.log("component  renderd!");

  function increaseCount() {
    setCount((currCount) => {
      return currCount + 1;
    });
  
  }

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increaseCount}>increase count </button>
    </div>
  );
}

export default Counter;
