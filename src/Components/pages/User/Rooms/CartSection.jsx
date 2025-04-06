import React, { useState, useEffect } from 'react';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import "./cartSection.css";

import Navbar from '../User_home/UserNavBar';

export default function CartSection() {
    const [rooms, setRooms] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [, setRoomId] = useState()
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch('https://hotelbackend-u39t.onrender.com/user/get/room');
                if (response.ok) {
                    const data = await response.json();
                    setRooms(data);
                } else {
                    console.error('Failed to fetch rooms');
                }
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);

    const handleBookClick = (roomId) => {
        if (isLoggedIn) {
            localStorage.setItem("roomId", JSON.stringify(roomId))
            setRoomId(roomId)
            navigate("/user_rooms")
        } else {
            navigate("/login")
        }
    };
    const discountCalculate=(price)=>{
        const finalRate = (50*price)/100;
        return finalRate;
    }

    return (
        <div>
            <Navbar/>
            <div className="room" style={{ marginTop: '15vh' }}>
                <h3>Handpicked Nearby Car Washing Center For You</h3>
            </div>
            <div className="row1">
                {rooms.map((room, index) => (
                    <div className="card">
                        <div className="cursor-pointer">
                            <div className="two">
                                <Link to={`/booking`} className="block text-slate-700 hover:text-brand transition-colors duration-300">
                                    <img src={room.image} className="md:w-[220px] md:h-[140px]" style={{ height: '12rem', width: "15rem" }} alt="Room" />
                                </Link>
                            </div>       
                        </div>
                        <div className="x">
                                <div className="card_1 ">
                                <span className="text-slate-600 text-sm">{room.location}</span><br />
                                <span id="status" className={`room-status ${room.status === 'available' ? 'green' : 'red'}`}>Status: {room.status === "available" ? "Available" : "Not Available"}</span><br/>
                                <span className="text-slate-600 font-bold whitespace-nowrap" style={{color:'red', fontWeight:'1000', fontSize:'1.5rem'}}>
                                        ₹ {discountCalculate(room.price)}
                                    </span><br />
                                    <span>50% off ₹</span>
                                    <span className="text-slate-600 font-bold whitespace-nowrap" style={{color:'black', fontWeight:'300', fontSize:'1rem', textDecoration:'line-through'}}>
                                        {room.price} 
                                    </span>
                                </div>
                               
                            </div>
                        <button
                                    className="bg-success  px-4 py-2 text-blue  whitespace-nowrap " style={{borderRadius:'19px', marginLeft:'-1rem'}}
                                    onClick={() => handleBookClick(room.id)}
                                >
                                    Book now
                                </button>
                    </div>
                ))}
            </div>

        </div>
    );
}