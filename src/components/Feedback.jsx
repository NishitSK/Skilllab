import React, { useState } from 'react';
import './Feedback.css';

export default function Feedback() {
  const [data, setData] = useState({
    username: '',
    usermail: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you!!!");
    console.log("Form data:->", data);
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="Enter username"
          required
        />

        <label htmlFor="usermail">User Email</label>
        <input
          type="email"
          name="usermail"
          value={data.usermail}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />

        <label htmlFor="message">Only a hater would give a bad feedback</label>
        <textarea
          name="message"
          value={data.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

