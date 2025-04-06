import React, { useState } from 'react';
import Footer from '../../../pages/User/User_home/Footer';
import './login.css';
import {Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../pages/User/User_home/Navbar';

export default function Login() {
    const navigate  = useNavigate ();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://hotelbackend-u39t.onrender.com/Login/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                const data = await response.json();
                
                const token = data.token.tokenValue;
                localStorage.setItem('token', token);
                console.log('Login successful');
                alert("Login successfully.");
                navigate('/user_home');
            } else if (response.status === 404) {
                alert("Password not matched.");
            } else if (response.status === 401) {
                alert("Email not registered");
            } else {
                console.log("Login failed .");
                alert("Internal server error. login after some time...");
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <Navbar/>
            <div className='background'>               
                <div className="container" id='otp'><span className='span_login'>Login</span>
                    <form className='size_login p-3' onSubmit={handleSubmit}>
                        <div className="row" id="otp-1">
                            <div className="col">
                                <label htmlFor="email">Email_Id</label>
                                <input type="text" className="form-control" name="email" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={handlePasswordChange} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <Link to = "/forget_password" className='login'>Forget Password click here!</Link>
                            </div>
                        </div>
                        <div className="button_login mt-3">
                            <button type="submit" className='btn btn-lg btn-success login_btn'>Login</button>
                            <button type="submit" className='btn btn-sm btn-danger login_btn'>Cancel</button>
                            <Link to="/adminlogin"> <button type="submit" className='btn btn-lg btn-primary login_btn'>Admin</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
