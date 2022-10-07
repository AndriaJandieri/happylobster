import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import HeroSection from '../components/HeroSection';
const Contact = () => {
  return (
    <div id='contact'>
      <Navbar />
      <HeroSection heading="CONTACT" text="Do not hesitate to contact us if you have any suggestion or question, also any your feedback will be much appreciated" />
      <ContactForm />
    </div>
  )
}

export default Contact;