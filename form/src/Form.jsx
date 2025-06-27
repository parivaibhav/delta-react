import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({ fullName: "", userName: "" });

  const handleInputChange = (e) => {
    setFormData((currData) => ({
      ...currData,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ fullName: "", userName: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <br />
      <input
        type="text"
        placeholder="Enter full Name"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="userName">User Name:</label>
      <br />
      <input
        type="text"
        placeholder="Enter User Name"
        value={formData.userName}
        id="userName"
        name="userName"
        onChange={handleInputChange}
      />
      <br /> <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
