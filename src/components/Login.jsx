import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [data, setData] = useState({
    username: '',
    usermail: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); 
    alert("Logged in successfully!");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
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

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />

        <div className="button-container">
          <button type="submit" className="login-button">Login</button>
        </div>
      </form>
    </div>
  );
}
