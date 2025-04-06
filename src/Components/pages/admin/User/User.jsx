import React, { useState, useEffect } from 'react';
import "./user.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


export default function User({ onUserBooking }) { // Receive onUserBooking prop
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hotelbackend-u39t.onrender.com/get/all/User');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (email) => {
    try {
      await axios.delete(`https://hotelbackend-u39t.onrender.com/delete/user?email=${email}`);
      localStorage.removeItem('token');
      setUserData(userData.filter(user => user.email !== email));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const userBooking = async (userId) => {
    localStorage.setItem('userId', userId);
    onUserBooking(userId);
  }
  return (
    <>
      <div className="data">
        <div className="abc">
          <div className='row' id='frow'>
            <div className="col">First_Name</div>
            <div className="col">Last_Name</div>
            <div className="col">Number</div>
            <div className="col">Email_Id</div>
            <div className="col">Goverment_Id</div>
            <div className="col">Id_Number</div>
            <div className="col">Booking</div>
            <div className="col">Delete</div>
          </div>
        </div>
        
          {userData.map((user, index) => (
            <div className='row' id='drow' key={index}>
              <div className="col mt-1">{user.firstName}</div>
              <div className="col mt-1">{user.lastName}</div>
              <div className="col mt-1">{user.phone}</div>
              <div className="col mt-1">{user.email}</div>
              <div className="col mt-1">{user.governmentId}</div>
              <div className="col mt-1">{user.idNumber}</div>
              <div className="col mt-1" onClick={() => userBooking(user.userId)}><FontAwesomeIcon icon={faEye}/></div>
              <div className="col mt-1">
                <button className='btn btn-danger btn-sm' onClick={() => deleteUser(user.email)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      
    </>
  )
}
