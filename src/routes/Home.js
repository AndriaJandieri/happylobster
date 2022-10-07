import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div id='home'>
      <Navbar />
      <HeroImg />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home