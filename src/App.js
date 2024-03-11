import React, { useState, useEffect } from 'react';
// components
import Skills from './components/skills/Skills';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import About from './components/About';
import Project from './components/projects/Project';
import Work from './components/work/Work';

import Contact from './components/contact/Contact';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      {isMobile ? <Nav /> : <Nav2 />}
      <Banner />
      <About />
      <Skills />
      <Project />
      <Work />
      <Contact />
      { <div className='h-[380px]'></div> }
    </div>
  );
};

export default App;
