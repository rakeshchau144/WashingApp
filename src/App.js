import React from "react";
import "./App.css";
import CartSection from "./Components/pages/User/Rooms/CartSection";
// import img from "./asserst/room1.jpg";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/pages/User/User_home/Home";
import Navbar from "./Components/pages/User/User_home/Navbar";
import About from "./Components/pages/about/About";
import Book from "./Components/pages/User/Booking/Book";
import Register from "./Components/pages/User/Register/Register";
import Verifyotp from "./Components/pages/User/Register/Verifyotp";
import Login from "./Components/pages/User/login/Login";
import User from "./Components/pages/admin/User/User";
import AdminHome from "./Components/pages/admin/AdminHome";
import Booking from "./Components/pages/admin/Booking/Booking";
import Roomadd from "./Components/pages/admin/Room/Roomadd";
import Rooms from "./Components/pages/admin/Room/Rooms";
import RoomDetail from "./Components/pages/User/Room_Detail/RoomDetail";
import AboutAdmin from "./Components/pages/about/AdoutAdmin";
import UserNavBar from "./Components/pages/User/User_home/UserNavBar";
import MyBooking from "./Components/pages/User/Booked_room/MyBooking";
import UserHome from "./Components/pages/User/User_home/UserHome";
import PageRooms from "./Components/pages/User/Rooms/PageRooms";
import Profile from "./Components/pages/User/Profile/Profile";
import ContactUs from "./Components/pages/User/ContactUs/ContactUs";
import ServicePlace from "./Components/pages/ServicePlaces/ServicePlace";
import ForgetPassword from "./Components/pages/User/ForgetPassword/ForgetPassword";
import AdminLogin from "./Components/pages/admin/loginpage/Adminlogin";




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/cartsection" element={<CartSection/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otpverify" element={<Verifyotp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/bookings" element={<Booking/>}/>
        <Route path="/roomadd" element={<Roomadd/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/room_detail" element={<RoomDetail/>}/>
        <Route path="/about_admin" element={<AboutAdmin/>}/>
        <Route path="/user_nav_bar" element={<UserNavBar/>}/>
        <Route path="/user_home" element={<UserHome/>}/>
        <Route path="/my_booking" element={<MyBooking/>}/>
        <Route path="/user_rooms" element={<PageRooms/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/service_place" element={<ServicePlace/>}/>
        <Route path="/forget_password" element={<ForgetPassword/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
