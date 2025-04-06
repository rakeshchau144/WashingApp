import React, { useState, useEffect } from 'react';
import './booking.css';
import axios from 'axios';

export default function Booking() {
  const [roomData, setRoomData] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`https://hotelbackend-u39t.onrender.com/get/room/booking?userId=${userId}`);
        setRoomData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
  }

  const handleStatusChange = async (bookingId, status) => {
    try {
      await axios.put(`https://hotelbackend-u39t.onrender.com/set/room/booking/status?roomBookingId=${bookingId}&status=${status}`);
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`https://hotelbackend-u39t.onrender.com/get/room/booking?userId=${userId}`);
      setRoomData(response.data);
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  }

  return (
    <div className="container_booking">
      <div className="bookings">
        <div className="row">
          <div className='col'>Booking No </div>
          <div className='col'>Date </div>
          <div className='col'>Total Price </div>
          <div className='col'>Days</div>
          <div className='col'>Night</div>
          <div className='col'>Address </div>
          <div className='col'>Status</div>
          <div className='col'>Accept/Reject </div>
        </div>
      </div>
      {roomData.map((booking, index) => (
        <div className="row" id='drow' key={index}>
          <div className='col mt-2'>{booking.id} </div>
          <div className='col mt-2'>{formatDate(booking.checkInDate)}</div>
          <div className='col mt-2'>{booking.price}</div>
          <div className='col mt-2'>{booking.days}</div>
          <div className='col mt-2'>{booking.night}</div>
          <div className='col mt-2'>{booking.userAddress} </div>
          <div className={`col mt-2 ${booking.status === null ? 'pending' : (booking.status ? 'available' : 'unavailable')}`} onClick={() => handleBookingClick(booking)}>
            {booking.status === null ? 'Pending' : (booking.status ? 'Available' : 'Unavailable')}
          </div>
          <div className='col mt-2'>
            {/* Dropdown menu for changing status */}
            <select value={booking === selectedBooking ? (booking.status ? 'accepted' : 'rejected') : ''} onChange={(e) => handleStatusChange(booking.id, e.target.value === 'accepted')}>
              <option value="">Select</option>
              <option value="accepted">Accept</option>
              <option value="rejected">Reject</option>
            </select>
          </div>
        </div>  
      ))}
    </div>
  )
}
