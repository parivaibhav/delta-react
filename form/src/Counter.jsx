import React, { useState, useEffect } from "react";

function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  const incrementx = () => {
    setCountx(countx + 1);
  };
  const incrementy = () => {
    setCounty(county + 1);
  };

  useEffect(
    function update() {
      console.log(`Counter X updated: ${countx}`);
    },
    [countx]
  );

  return (
    <div>
      <h3>Counter X = {countx}</h3>
      <button onClick={incrementx}>+1</button>
      <h3>Counter Y = {county}</h3>
      <button onClick={incrementy}>+1</button>
    </div>
  );
}

export default Counter;
