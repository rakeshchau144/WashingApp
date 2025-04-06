import React, { useState } from 'react';
import UserNavBar from '../User_home/UserNavBar';
import "./book.css";
import Footer from '../User_home/Footer';
import { useNavigate } from 'react-router-dom';

export default function Book() {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [checkInDate, setBookingDate] = useState('');
    const [numberOfDays, setNumberOfDays] = useState(0);
    const [numberOfNights, setNumberOfNights] = useState(0);
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleBookingDateChange = (e) => {
        setBookingDate(e.target.value);
    };

    const handleNumberOfDaysChange = (e) => {
        setNumberOfDays(e.target.value);
    };

    const handleNumberOfNightsChange = (e) => {
        setNumberOfNights(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token')
            const roomId = localStorage.getItem('roomId')
            const response = await fetch(`https://hotelbackend-u39t.onrender.com/user/book/room?token=${token}&roomId=${roomId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: name,
                    gender: gender,
                    checkInDate,
                    days: numberOfDays,
                    night: numberOfNights,
                    userAddress: address
                })
            });
            if (response.ok) {
                console.log('Booking successful');
                alert("Your booking is done wait for Conformation")
                navigate("/my_booking")

            } else if (response.status === 404) {
                console.error('Booking failed');
                alert("Booking failed !!");
            }
        } catch (error) {
            console.error('Error during booking:', error);
            alert("Error during booking" + error);
        }
    };

    return (
        <>
            <div className="main" style={{marginTop:'14rem'}}>
                <div className="navigation">
                    <UserNavBar />

                </div>
                <div className="bodyElement">
                    <div className='background'>
                        <div className="sss">
                            <form className='book_form' onSubmit={handleSubmit}><span className='span_login'>Book Your Day For Washing</span>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="">Name:</label>
                                        <input type="text" className="form-control" value={name} onChange={handleNameChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="">Address:</label>
                                        <input type="text" className="form-control" value={address} onChange={handleAddressChange} />
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col">
                                        <label htmlFor="">Vehicle No.:</label>
                                        <input type="text" className="form-control" value={gender} onChange={handleGenderChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="">Vehicle Name:</label>
                                        <input type="text" className="form-control" value={numberOfNights} onChange={handleNumberOfNightsChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="">Check-In</label>
                                        <input type="date" className="form-control" value={checkInDate} onChange={handleBookingDateChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="">No. of Days:</label>
                                        <input type="number" className="form-control" value={numberOfDays} onChange={handleNumberOfDaysChange} />
                                    </div>
                                </div>
                                <div className="button">
                                    <button type="submit" className='btn btn-lg btn-success'>Book</button>
                                    <button type="submit" className='btn btn-lg btn-danger'>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'6rem'}}></div>
            <Footer />
        </>
    )
}
