import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-container">
        <ul className="contact-list">
            <li><Link to="/">Manager: 897867587</Link></li>
            <li><Link to='/cake'>Company: 87676767</Link></li>
            <li><Link to='/contact'>Contact: 8y767t7t77i</Link></li>
        </ul>
        <footer className="footer">
            <p>&copy; 2024 Your Cake Shop. All Rights Reserved.</p>
            <p>Contact us at: <a href="mailto:info@yourcakeshop.com">info@yourcakeshop.com</a></p>
        </footer>
    </div>
  )
}
