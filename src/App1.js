import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cake from './components/Cake';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Home from './components/Home';
import Login from './components/Login';
import CakeDetails from './components/CakeDetails';
import Cart from './components/Cart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCart([]);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} cart={cart} />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/cake/:id" element={<CakeDetails isLoggedIn={isLoggedIn} cart={cart} setCart={setCart} />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;









