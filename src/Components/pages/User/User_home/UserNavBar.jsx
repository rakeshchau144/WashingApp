import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../../App.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (isLoggedIn) {
      navigate(path)
    } else {
      navigate("/login")
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
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
                <Link  to="/user_home" className='home'>Home</Link>
                </li>
                <li>
                <Link to="/cartsection" className='cartsection'>Options</Link>
                </li>
                <li>
                <Link to="/my_booking" className='my_booking' onClick={() => handleLinkClick("/my_booking")}>MyBooking</Link>
                </li>
                <li>
                <Link to="/profile" className='profile' onClick={() => handleLinkClick("/profile")}>Profile</Link>
                </li>
                <li>
                <Link to="/contact_us" className='contact'>ContactUs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}
