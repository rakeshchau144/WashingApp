import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PageRooms from '../Rooms/CartSection'
import Service from '../../../../service/Service'
import UserNavBar from './UserNavBar'
import ContactUs from '../ContactUs/ContactUs'
import ServicePlace from '../../ServicePlaces/ServicePlace'
import CartSection from '../Rooms/CartSection'

export default function UserHome() {
  return (
    <>
      <div className="user_home">
         <UserNavBar/>
        <Header />
        <ServicePlace/> 
        <CartSection/>
         <Service />
        <ContactUs/>
        <Footer /> 
      </div>
    </>
  )
}
