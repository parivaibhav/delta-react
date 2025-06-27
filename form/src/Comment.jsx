import React, { useState } from "react";
import "./Comment.css"; // Custom CSS file
import CommentForm from "./CommentForm"; // Importing CommentForm component

function Comment() {
  const [comments, setComments] = useState([
    {
      username: "John",
      remarks: "Great product!",
      rating: 5,
    },
    {
      username: "Jane",
      remarks: "Not bad, could be better.",
      rating: 3,
    },
    {
      username: "Doe",
      remarks: "I love it!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  const renderStars = (count) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < count ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="comment-container">
        <h1 className="heading">User Comments</h1>
        <div className="comment-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment-card">
              <h3 className="username">{comment.username}</h3>
              <p className="remarks">{comment.remarks}</p>
              {renderStars(comment.rating)}
            </div>
          ))}
        </div>
      </div>
      <CommentForm addNewComment={addNewComment} />
    </>
  );
}

export default Comment;
