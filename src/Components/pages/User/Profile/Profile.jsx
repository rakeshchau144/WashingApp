import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import UserNavBar from "../User_home/UserNavBar";
export default function ProfilePage() {
  const navigate  = useNavigate ();
  const [userData, setUserData] = useState(null);
  const [totalBooking , setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`https://hotelbackend-u39t.onrender.com/userDetail?token=${token}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          return response.json();
        })
        .then(data => {
          setUserData(data);
          console.log(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setError(error);
          setLoading(false);
        });
    }
  }, []);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`https://hotelbackend-u39t.onrender.com/total/booking?token=${token}`)
      .then(response=>{
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data =>{
        setBooking(data);
      })
      .catch(error=>{
        console.error('Error fetching user data:', error);          
      })
    }
  },[])
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('token'); // Remove token from localStorage
      navigate('/');
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section style={{backgroundColor: '#eee' }}>
      <UserNavBar/>
      <MDBContainer style={{ marginTop:'6.6rem'}} className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <div>
                <FontAwesomeIcon 
                className="rounded-circle"
                style={{ width: '150px', height:'150px' }}
                fluid
                icon={faUser} />
                </div>
                <p className="text-muted mb-4">{userData && userData.firstName} {userData.lastName}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Change Password</MDBBtn>
                  
                </div>
                <div className="d-flex justify-content-center mb-2">
                <MDBBtn onClick={handleLogout} style={{backgroundColor:'red'}}>Logout</MDBBtn>
                  
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBCardText>Total Booking</MDBCardText>
                    <MDBCardText>{totalBooking}</MDBCardText>
                  </MDBListGroupItem>
                  {/* Add more social links */}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
          <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData && userData.firstName} {userData.lastName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Government ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.governmentId}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Id Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.idNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
