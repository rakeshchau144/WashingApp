


import roomImage from '../../../../asserst/room1.jpg';
import roomImage1 from '../../../../asserst/img/jpeg/details-3.jpeg';
import roomImage2 from '../../../../asserst/img/jpeg/room-10.jpeg';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faParking, faSwimmingPool, faHeadset, faCity, faStar, faEnvelope, faLocationDot, faPerson, faMoneyCheckDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import "./roomDetail.css";
import UserNavBar from '../User_home/UserNavBar';
import { useNavigate } from 'react-router-dom';
import Footer from '../User_home/Footer';

export default function RoomDetailPage(props) {
    const [roomDetails, setRoomDetails] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [, setRoomId] = useState();
    const navigate = useNavigate();

    const getRoomData = async () => {
        const roomId = localStorage.getItem("roomId");
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`https://hotelbackend-u39t.onrender.com/user/get/room/by/id?token=${token}&roomId=${roomId}`);
            if (response.ok) {
                const data = await response.json();
                setRoomDetails(data);
            } else {
                alert("Room data not found");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const getFeedbackData = async () => {
        const roomId = localStorage.getItem("roomId");
        try {
            const response = await fetch(`https://hotelbackend-u39t.onrender.com/get/feedback/room/Id?roomId=${roomId}`);
            if (response.ok) {
                const data = await response.json();
                setFeedback(data);
            } else {
                alert("Feedback data not found");
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getRoomData();
        getFeedbackData();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleBookClick = (roomId) => {
        if (isLoggedIn) {
            localStorage.setItem("roomId", JSON.stringify(roomId));
            setRoomId(roomId);
            navigate("/booking");
        } else {
            navigate("/login");
        }
    };
    return (
        <>
            <UserNavBar />
            <div className="container">
                <div className="containercc">
                    <div className="img">
                        <img className="room_image_size1" src={roomImage} alt='Room' />
                        <img className='room_image_size2' src={roomImage1} alt="Room" />
                        <img className='room_image_size3' src={roomImage2} alt="Room" />
                    </div>
                    <div className="facilities">
                        Facilities
                    </div>
                    <div className="icons">
                        <div className="suggested-icons"> Free Wifi<FontAwesomeIcon icon={faWifi} />
                        </div>
                        <div className="suggested-icons">Parking: <FontAwesomeIcon icon={faParking} />
                        </div>
                        <div className="suggested-icons">Swimming: <FontAwesomeIcon icon={faSwimmingPool} />
                        </div>
                        <div className="suggested-icons">Music: <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <div className="suggested-icons">City view <FontAwesomeIcon icon={faCity} />
                        </div>
                    </div>
                    {roomDetails && (
                        <div className="detail">
                            <div className="ratings">
                                <h3 className='h3'>Ratings</h3>
                                <div className="rating-item">
                                    <span>Mantaince Quality</span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                                <div className="rating-item">
                                    <span>Cleaning</span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="rating-item">
                                    <span>Environment</span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="room-details1">
                                <h3 className='h3'>Washing Detail</h3>
                                <p id="room_no">Serial No: {roomDetails.roomNo}</p>
                                <p id='price'><FontAwesomeIcon icon={faMoneyCheckDollar} className='margin' />Price: {roomDetails.price}</p>
                                <p id='location'><FontAwesomeIcon icon={faLocationDot} className='margin' />Location: {roomDetails.location}</p>
                                <p id='type'><FontAwesomeIcon icon={faPerson} className='margin' />Vehicle Type: {roomDetails.roomType}</p>
                                <p id="status" className={`room-status ${roomDetails.status === 'available' ? 'green' : 'red'}`}>Status: {roomDetails.status}</p>
                            </div>
                        </div>
                    )}
                    <div className="button_book">
                        <button className='btn btn-success btn-lg change' onClick={() => handleBookClick(roomDetails.id)}>Book Apponment </button>
                    </div>
                </div>
                <div className="feedBackGet">
                    <h3 style={{
                        fontWeight:600
                    }}>User Reviews</h3>
                    {roomDetails &&(
                        <div className="ratingss">
                            <h5 style={{
                        fontWeight:800
                    }}>Overall Rating </h5><h5 style={{
                        fontWeight:800,
                        fontSize:'2.4rem',
                        color:'red'
                    }}>
                        {roomDetails.rating}/5 <FontAwesomeIcon icon={faStar} /></h5>
                        </div>
                    )}
                    {feedback.map((feedbackItem, index) => (
                        <div className="card1" key={index} style={{
                            marginTop: '2rem',
                            height: 'fit-content'
                        }}>
                            <div className="leftFeedBack">
                                <h1 style={{
                                fontSize: '1.5rem'
                            }}><FontAwesomeIcon icon={faUser} /> {feedbackItem.name}</h1>
                                <h1 style={{
                                fontSize: '1rem',
                                fontWeight: 200
                            }}><FontAwesomeIcon icon={faEnvelope} /> Email: {feedbackItem.email}</h1>
                                <p className='mt-3'>{feedbackItem.message}</p>
                            </div>
                            <div className="rightFeedBack">
                                <h4 className="font-small p-2" style={{
                                        width:'fit-content',
                                        alignContent:'center',
                                        borderRadius:'3px',
                                        textAlign:'center',
                                        color:'#facc15',
                                        fontSize:'1.2rem',
                                        fontWeight:'100'
                                                                
                                    }}>
                                    {feedbackItem.rating} <FontAwesomeIcon icon={faStar} />
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
