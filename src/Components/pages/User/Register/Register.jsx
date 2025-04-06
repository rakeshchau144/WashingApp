import React from 'react'
import "../Register/Register.css";
import Navbar from '../User_home/Navbar';
import Footer from '../User_home/Footer';
import { useState } from "react";
import { Link, useNavigate  } from 'react-router-dom'; 
export default function Register() {
    const navigate  = useNavigate ();
    const [isOpen ,setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
      };
    

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        governmentId: "",
        idNumber: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://hotelbackend-u39t.onrender.com/user/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('User  registered successfully');
                alert('User registered successfully.');
                navigate('/otpverify');
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    password: "",
                    governmentId: "",
                    idNumber: ""
                });
            } else if (response.status === 409) {
                alert('User is already registered.');
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };
    return (
        <>
        <Navbar/>
            <div className='background' style={{marginTop:'-2rem'}}>
                <div className="register">
                    <form className='form_register' onSubmit={handleSubmit}>
                        <span><h6 style={{color:'black', alignItems:'center'}}>Fill the form !</h6></span>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">First Name:- </label>
                                <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleInputChange} required/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Last Name:- </label>
                                <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Phone No:- </label>
                                <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} required/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Email ID:- </label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Government Id:- </label>
                                <input type="text" className="form-control" name="governmentId" value={formData.governmentId} onChange={handleInputChange} required/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Id Number:- </label>
                                <input type="text" className="form-control" name="idNumber" value={formData.idNumber} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Password:- </label>
                                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange} required />
                            </div>
                            <div className="col">
                                <label htmlFor="">Confirm Password:- </label>
                                <input type="password" className="form-control" name="password" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to = "/login" className='login'>Already registered click here!</Link>
                            </div>
                        </div>
                        <div className="button">
                            <button className='btn btn-lg btn-success'>Submit</button>
                            <button className='btn btn-lg btn-danger'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{marginTop:"25rem"}}>
            <Footer/>
            </div>
            
        </>
    )
}
{/* <form className='header_checkInSection_main' onSubmit={handleSubmit}>
                <div className='header_checkInSection'>
                    <div className="mainElementTop">
                        <div className="label1">
                            <label htmlFor="checkInDate">FROM:</label>
                            <input className='m-2' type="date" id="checkInDate" value={checkInDate} onChange={handleCheckInDateChange} />

                        </div>
                        <div className="label2">
                            <label htmlFor="checkOutDate">TO:</label>
                            <input className='input_section' type="date" id="checkOutDate" value={checkOutDate} onChange={handleCheckOutDateChange} />
                            </div>
                    </div>
                    <div className="persons">
                        <label htmlFor="numberOfPersons">Number of Persons:</label>
                        <select id="numberOfPersons" value={numberOfPersons} onChange={handleNumberOfPersonsChange}>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="triple">Triple</option>
                        </select>
                    </div>
                    <button type="submit">Check</button>
                </div>

            </form> */}
            