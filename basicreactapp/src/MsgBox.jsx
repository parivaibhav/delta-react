import React from "react";

function MsgBox({ userName, textColor }) {
  return (
    <>
      <div style={{ color: textColor }}>
        <h1>Hello {userName}</h1>
      </div>
    </>
  );
}

export default MsgBox;
