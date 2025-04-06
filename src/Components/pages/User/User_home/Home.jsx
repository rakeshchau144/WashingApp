import React from 'react';
import NavBar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import CartSection from '../Rooms/CartSection';
import Service from '../../../../service/Service';
import ContactUs from '../ContactUs/ContactUs';
import ServicePlace from '../../../pages/ServicePlaces/ServicePlace';
import PageRooms from '../../User/Rooms/PageRooms';

export default function Home() {
  return (
    <>

      <NavBar />
      <Header />
      <ServicePlace />
      <PageRooms />
      <Service />
      <ContactUs />
      <Footer />
    </>
  );
}
