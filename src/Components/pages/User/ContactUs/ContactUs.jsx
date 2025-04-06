import React, { useState } from 'react';
import './contact.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://hotelbackend-u39t.onrender.com/contact/us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    message: ''
                });
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    return (
        <div className="contacts">
            <div className="leftSide">
                <h3>Contact Information</h3>
                <p>Say something to start a live chat !</p>
                <h6>9161329965</h6>
                <h6>yadav58y4@@gmail.com</h6>
                <p>Basti Uttar Pradesh 272151</p>
            </div>
            <div className="rightSide">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">Name <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} /></div>
                        <div className="col">Email<input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} /></div>
                    </div>
                    <div className="row">
                        <div className="col">Number<input type="text" className="form-control" name="number" value={formData.number} onChange={handleInputChange} /></div>
                        <div className="col">Message<input type="text" className="form-control" name="message" value={formData.message} onChange={handleInputChange} /></div>
                    </div>
                    <button type="submit" className='btn btn-lg btn-dark'>Send Message</button>
                </form>
            </div>
        </div>
    );
}
