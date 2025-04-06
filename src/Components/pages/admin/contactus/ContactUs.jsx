import React, { useState, useEffect } from 'react';
import './contact.css';

export default function ContactUs() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('https://hotelbackend-u39t.onrender.com/get/contact');
        if (response.ok) {
          const data = await response.json();
          setContactData(data);
        } else {
          console.error('Failed to fetch contact data');
        }
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);

  const deleteContact = async (contactId) => {
    try {
      const response = await fetch(`https://hotelbackend-u39t.onrender.com/delete/contact?contactId=${contactId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setContactData(contactData.filter(contact => contact.contactId !== contactId));
        alert("Contact deleted");
      } else {
        console.error('Failed to delete contact');
      }
    } catch (error) {
      console.error('Internal server error:', error);
    }
  }

  return (
    <div className="container_contactus">
      {contactData.map((contact, index) => (
        <div className="row" key={index}>
          <div className="col">
            <div className='contact_name'>
              <span>Name: </span>{contact.name}
            </div>
            <div className='contact_email'>
              <span>Email: </span>{contact.email}
            </div>
            <div>
              <span>Number: </span>{contact.number}
            </div>
            <div>
              <span>Message: </span>{contact.message}
            </div>
          </div>
          <div className="contact_button">
            <button className='btn btn-lg btn-danger' onClick={() => deleteContact(contact.contactId)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
