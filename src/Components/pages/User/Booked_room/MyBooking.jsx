import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import UserNavBar from '../User_home/UserNavBar';
import { FaStar } from 'react-icons/fa';
import './myBooking.css';

export default function UserCard() {
  const [bookingDataList, setBookingDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [confirmCheckout, setConfirmCheckout] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [getRoomId,setRoomId] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0.0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`https://hotelbackend-u39t.onrender.com/view/room/booking?token=${token}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          setBookingDataList(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching booking data:', error);
          setError(error);
          setLoading(false);
        });
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  const handleCheckoutConfirmation = (bookingId) => {
    setSelectedBookingId(bookingId);
    setConfirmCheckout(true);
  };

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://hotelbackend-u39t.onrender.com/check/out?token=${token}&bookingId=${selectedBookingId}`, {
        method: 'PUT'
      });
      if (response.ok) {
        console.log("Checkout successful");
      } else {
        throw new Error('Failed to checkout');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    } finally {
      setConfirmCheckout(false);
    }
  };
  

  const toggleFeedbackForm = (roomId) => {
    setFeedbackVisible(!feedbackVisible);
    setRoomId(roomId)
  };

  const handleSubmitFeedback = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://hotelbackend-u39t.onrender.com/feedback?token=${token}&roomId=${getRoomId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message, rating })
      });
      if (response.ok) {
        console.log("Feedback submitted successfully");
        setName('');
        setMessage('');
        setRating(0.0);
        setFeedbackVisible(false);
      } else {
        console.log(response);
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <>
      <UserNavBar />
      <Box sx={{ width: '100%', position: 'relative', marginTop: '17rem', overflow: { xs: 'auto', sm: 'initial' } }}>
        {bookingDataList.map(bookingData => (
          <Card
            key={bookingData.id}
            orientation="horizontal"
            sx={{
              width: '100%',
              flexWrap: 'wrap',
              mb: 2,
            }}
          >
            <CardContent>
              <div className="mybooking_flex">
                <div className="mybookingLeft">
                  <Typography fontSize="xl" fontWeight="lg">
                    {bookingData.userName}
                  </Typography>
                  <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                    Email ID {bookingData.userEmail}
                  </Typography>
                  <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                    Contact Number {bookingData.number}
                  </Typography>
                  <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                    Booking date: {formatDate(bookingData.bookingDate)}
                  </Typography>
                </div>
                <div className="mybookingRight">
                  <button>
                    <div className="checkOut" onClick={() => handleCheckoutConfirmation(bookingData.id)}>CheckOut</div>
                  </button>
                </div>
              </div>
              <Sheet
                sx={{
                  bgcolor: 'background.level1',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 },
                }}
              >
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Price
                  </Typography>
                  <Typography fontWeight="lg">{bookingData.price} Rs.</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Booking  Number
                  </Typography>
                  <Typography fontWeight="lg">{bookingData.roomNumber}</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Booking Type
                  </Typography>
                  <Typography fontWeight="lg">{bookingData.roomType}</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Vehicle Number
                  </Typography>
                  <Typography fontWeight="lg">{bookingData.gender}</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Address
                  </Typography>
                  <Typography fontWeight="lg">{bookingData.userAddress}</Typography>
                </div>
              </Sheet>
              {!bookingData.checkInorOut ? (
                <div className="cls">
                  <div className='ss' style={{ backgroundColor: 'red', color: "white" }}>Cancel booking</div>
                  <div className='ss' style={{ backgroundColor: bookingData.status ? (bookingData.status ? "green" : "red") : "yellow" }}>{bookingData.status ? (bookingData.status ? "Booking confirmed" : "Booking not confirmed") : "Booking Pending"}</div>
                </div>
              ) : (
                <div className="feedback-section">
                  <div className='ss' style={{ backgroundColor: 'blue', color: "white" }} onClick={()=>toggleFeedbackForm(bookingData.roomId)}>Feedback</div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      {confirmCheckout && (
        <div className="confirmation-dialog">
          <div className="message">Are you sure you want to checkout?</div>
          <div className="buttons">
            <button onClick={handleCheckout}>Yes</button>
            <button onClick={() => setConfirmCheckout(false)}>No</button>
          </div>
        </div>
      )}

      {feedbackVisible && (
        <div className="feedback-modal">
          <div className="feedback-form">
            <form className='book_form' onSubmit={handleSubmitFeedback}>
              <div className="row">
                <div className="col">
                  <label htmlFor="">Name:</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col">
                  <label htmlFor="">Message:</label>
                  <input type="text" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;

                      return (
                        <label key={i}>
                          <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                          />
                          <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={25}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="button">
                <button type="submit" className='btn btn-lg btn-success'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
