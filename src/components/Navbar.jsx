import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cake">Cakes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        
        {}
        {isLoggedIn ? (
          <>
            <li><Link to="/cart">Cart</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}
