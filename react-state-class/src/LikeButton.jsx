import React, { useState } from "react";

function LikeButton() {
  let [isLiked, setisLiked] = useState(false);
  let clicked = () => {
    setisLiked(!isLiked);
  };

  let styles = {
    color: "red",
  };
  return (
    <div>
      <p onClick={clicked}>Like Button Demo</p>
      {isLiked ? (
        <i className="fa-solid fa-heart" onClick={clicked} style={styles}></i>
      ) : (
        <i className="fa-regular fa-heart" onClick={clicked}></i>
      )}
    </div>
  );
}

export default LikeButton;
