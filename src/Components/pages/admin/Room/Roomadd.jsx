import React, { useState } from 'react';
import './addRoom.css';


export default function Roomadd() {
  const [roomImage, setRoomImage] = useState(null);
  const [roomNo, setRoomNo] = useState('');
  const [price, setPrice] = useState('');
  const [roomType, setRoomType] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const handleImageChange = (e) => {
    setRoomImage(e.target.files[0]);
  };

  const handleRoomNoChange = (e) => {
    setRoomNo(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleTypeChange = (e) => {
    setRoomType(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', roomImage);
    formData.append('roomNo', roomNo);
    formData.append('price', price);
    formData.append('roomType', roomType);
    formData.append('location', location);
    formData.append('status', status);
    try {
      const response = await fetch('https://hotelbackend-u39t.onrender.com/add/room', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Room added successfully');
        alert("Room added successfully")
      } else {
        console.error('Room addition failed');
        alert("Room addition failed");
      }
    } catch (error) {
      console.error('Error during room addition:', error);
    }
  };

  return (
    <>
      <div className='background'>

        

        <form className='roomsize' onSubmit={handleSubmit}>
        <div className='head'>
          <h3 className='a'>Add Options !!</h3>
        </div>
          <div className="row">
            <div className="col">
              <label htmlFor="image">Wasing Image</label>
              <input type="file" className="form-control" name="image" onChange={handleImageChange} />
            </div>
            <div className="col">
              <label htmlFor="roomNo">Washing No.</label>
              <input type="number" className="form-control" name="roomNo" value={roomNo} onChange={handleRoomNoChange} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="price">Price</label>
              <input type="number" className="form-control" name="price" value={price} onChange={handlePriceChange} />
            </div>
            <div className="col">
              <label htmlFor="roomType">Vehicle Type</label>
              <select id="roomType" className="form-control" value={roomType} onChange={handleTypeChange}>
                <option value="">Select Vehicle Type</option>
                <option value="single">Bike</option>
                <option value="couple">Car</option>
                <option value="person">SUV</option>
                <option value="person">Truck</option>
                <option value="person">Harvester</option>
                <option value="person">XSUV</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="location">Location</label>
              <input type="text" className="form-control" name="location" value={location} onChange={handleLocationChange} />
            </div>
            <div className="col">
              <label htmlFor="status">Status</label>
              <select id="status" className="form-control" value={status} onChange={handleStatusChange}>
                <option value="">Select Room Status</option>
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>

            </div>
          </div>
          <div className="button mt-3">
            <button type="submit" className='btn btn-lg btn-success'>Add</button>
            <button type="reset" className='btn btn-lg btn-danger'>Reset</button>
          </div>
        </form>

      </div>
    </>
  )
}
