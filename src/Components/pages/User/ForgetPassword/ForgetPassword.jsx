import React, { useState } from 'react';
import Navbar from '../User_home/Navbar';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
  const [showFirstSection, setShowFirstSection] = useState(true);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    try {
      const response = await fetch(`https://hotelbackend-u39t.onrender.com/user/forget/otp/send?email=${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert("OTP send your email");
        setShowFirstSection(false);
        setShowSecondSection(true);
      } else if(response.status===404){
        alert("Email not register.");
        navigate('/register')
        console.error('Email not register.');
      }else{
        console.log("Failed to send OTP");
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const otp = formData.get('otp');
    const newPassword = formData.get('newPassword');
    const confirmPassword = formData.get('confirmPassword');
  
    try {
      const response = await fetch(`https://hotelbackend-u39t.onrender.com/user/forget/password?confirmPassword=${confirmPassword}&password=${newPassword}&otp=${otp}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newPassword,
          confirmPassword
        }),
      });
  
      if (response.ok) {
        alert("Login your account password saved")
        navigate('/login');
      } else if(response.status ===404){
        alert('OTP not matched.');
        console.log('OTP not matched.');
      }else if(response.status){
        alert("Confirmed password does not match the new password.")
        console.log("Confirmed password does not match the new password.")
      }else{
        console.error("Failed to forget password");
      }
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };
  
  return (
    <>
      <Navbar />
      {showFirstSection && (
        <div className="firstSection">
          <div className='background'>
            <div className="container" id='otp'>
              <span className='otp_H'>Forget Password</span>
              <form className='size' onSubmit={handleSendOTP}>
                <div className="row" id="otp-1">
                  <div className="col">
                    <label htmlFor="">Enter your Email :- </label>
                    <input type="email" className="form-control" name="email" />
                  </div>
                </div>
                <div className="button mt-3">
                  <button type="submit" className='btn btn-lg btn-success'>Send OTP</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showSecondSection && (
        <div className="secondSection">
          <div className='background'>
            <div className="container" id='otp'>
              <span className='otp_H'>Forget Password</span>
              <form className='size' onSubmit={handleSave}>
                <div className="row" id="otp-1">
                  <div className="col">
                    <label htmlFor="">Verify OTP :- </label>
                    <input type="text" className="form-control" name="otp" />
                  </div>
                </div>
                <div className="row" id="otp-1">
                  <div className="col">
                    <label htmlFor="">New Password :- </label>
                    <input type="password" className="form-control" name="newPassword" />
                  </div>
                  <div className="col">
                    <label htmlFor="">Confirm New Password :- </label>
                    <input type="password" className="form-control" name="confirmPassword" />
                  </div>
                </div>
                <div className="button mt-3">
                  <button type="submit" className='btn btn-lg btn-success'>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
