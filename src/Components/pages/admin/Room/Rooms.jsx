import React, { useState, useEffect } from 'react';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedRoomId, setSelectedRoomId] = useState(null); // Track selected room id for updating status

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:8080/user/get/room');
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

  const deleteRoom = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/delete/room?roomId=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setRooms(rooms.filter(room => room.id !== id));
        alert("Room deleted Successfully !!");
      } else if (response.status === 400) {
        console.log("This room id not matched any room");
      } else {
        console.log("Error:");
      }
    } catch (error) {
      console.error('Internal server error:', error);
    }
  }

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleUpdateClick = (id) => {
    setSelectedRoomId(id); // Set selected room id for updating status
  };

  const updateRoomStatus = async () => {
    try {
      const response = await fetch(`http://localhost:8080/change/room/status?id=${selectedRoomId}&status=${selectedStatus}`, {
        method: "PUT",
      });
      if (response.ok) {
        // Update room status in the UI
        setRooms(rooms.map(room => {
          if (room.id === selectedRoomId) {
            return { ...room, status: selectedStatus };
          }
          return room;
        }));
        alert("Room status updated successfully!");
      } else {
        console.error("Failed to update room status");
      }
    } catch (error) {
      console.error('Internal server error:', error);
    }
  }

  return (
    <div className="container111">
      <div className="row1 mt-5">
        {rooms.map(room => (
          <div className="col1 mt-5" key={room.id}>
            <div className="cart-section">
              <div className="room-details">
                <img src={room.image} alt={room.name} className="room-image" />
                <p id="p" className="room-name">Washing No: {room.roomNo}</p>
                <p id="p" className="room-price">Price: {room.price}</p>
                <p id="p" className="room-location">Location: {room.location}</p>
                <p id="p" className="room-type">Vehicle Type: {room.roomType}</p>
                <p id="status" className={`room-status ${room.status === "available" ? 'green' : 'red'}`}>Status: {room.status === "available" ? "Available" : "Not Available"}</p>
              </div>
              <div className="room_button">
                <button className='btn btn-lg btn-danger' onClick={() => deleteRoom(room.id)}>Delete</button>
              </div>
              <div className="room_button">
                {selectedRoomId === room.id ? (
                  <div className='flex'>
                    <select id="status" className="form-control" value={selectedStatus} onChange={handleStatusChange}>
                      <option value="">Select Room Status</option>
                      <option value="available">Available</option>
                      <option value="not-available">Not Available</option>
                    </select>
                    <button className='btn btn-lg btn-primary' onClick={updateRoomStatus}>Save</button>
                  </div>
                ) : (
                  <button className='btn btn-lg btn-primary' onClick={() => handleUpdateClick(room.id)}>Update</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
