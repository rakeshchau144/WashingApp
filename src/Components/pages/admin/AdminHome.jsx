
import React, { useState } from 'react';
import "./home.css";
import User from './User/User';
import Booking from './Booking/Booking';
import Rooms from './Room/Rooms';
import AboutAdmin from "../about/AdoutAdmin"
import Roomadd from './Room/Roomadd';
import Feedback from './feedback/Feedback';
import ContactUs from './contactus/ContactUs';
export default function AdminHome() {
  const [section, setSection] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleClick = (sectionName) => {
    setSection(sectionName)
  }
  const handleUserBooking = (user) => {
    setSelectedUser(user);
    setSection('bookings'); // Switch to the bookings section
  }
  return (
    <div className='maindiv'>
      <div className="childleft">
        <div className="heading_admin">Stay here</div>
        <div className="buttons">
          {/* Add onClick handlers to each section */}
          <div className="box" onClick={() => handleClick('users')}>Users</div>
          <div className="box" onClick={() => handleClick('rooms')}>Options</div>
          <div className="box" onClick={() => handleClick('roomadd')}>Add Options</div>
          <div className="box" onClick={() => handleClick('feedback')}>Feedback</div>
          <div className="box" onClick={() => handleClick('contactUs')}>Contact Us</div>
          <div className="box" onClick={() => handleClick('about')}>About</div>
        </div>
      </div>
      <div className="childright">
        {/* Conditional rendering based on the selected section */}
        {section === 'users' && <User onUserBooking={handleUserBooking} />}
        {section === 'bookings' && <Booking user={selectedUser} />}
        {section === 'rooms' && <Rooms />}
        {section === 'feedback' && <Feedback />}
        {section === 'contactUs' && <ContactUs />}
        {section === 'about' && <AboutAdmin />}
        {section === 'roomadd' && <Roomadd />}
      </div>
    </div>
  )
}
