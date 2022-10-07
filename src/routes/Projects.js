import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import Proj from '../components/Proj';

const Projects = () => {
  return (
    <div id='projects'>
      <Navbar />
      <HeroSection heading="PROJECTS" text="We are mostly focused on hyper-casual games." />
      <Proj />
    </div>
  )
}

export default Projects;