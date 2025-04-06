import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <h4>Car Washing Center</h4>
          </div>
          <div className="shift">
            <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
              <li>
                <Link to="/" className='home'>Home</Link>
              </li>
              <li>
                <Link to="/cartsection" className='cartsection'>Rooms</Link>
              </li>
              <li>
                <Link to="/about" className='about'>About</Link>
              </li>
              <li>
                <Link to="/register" className='register'>Register</Link>
              </li>
              <li>
                <Link to="/login" className='register'>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;