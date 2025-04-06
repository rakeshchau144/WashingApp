import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

import Footer from '../User_home/Footer';
import Navbar from '../User_home/Navbar';
export default function Verifyotp() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');

    const handleInputChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://hotelbackend-u39t.onrender.com/user/otp/verify?otp=${otp}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                console.log('OTP verified successfully');
                alert("OTP verified successfully");
                navigate('/login');
            } else {
                console.error('OTP verification failed');
                alert("OTP not verified");
            }
        } catch (error) {
            console.error('Error during OTP verification:', error);
        }
    };
    return (
        <>
            <Navbar />
            <div className='background'>
                <div className="container" id='otp'><span className='otp_H'>OTP Verification !!</span>
                    <form className='size' onSubmit={handleSubmit}>
                        <div className="row" id="otp-1">
                            <div className="col">
                                <label htmlFor="">Verify Your OTP :- </label>
                                <input type="text" className="form-control" name="otp" value={otp} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="button mt-3">
                            <button className='btn btn-lg btn-success'>Verify </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
