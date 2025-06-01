import React from "react";

function handleFormSubmit(e) {
  e.preventDefault();
  console.log("form submiited!");
}

function Form() {
  return (
    <form method="get" onSubmit={handleFormSubmit}>
      <input type="text" name="" id="" />
      <input type="password" name="" id="" />
      <button>Submit</button>
    </form>
  );
}

export default Form;
