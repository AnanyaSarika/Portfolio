import React from 'react';
import Logo from '../assets/logo.svg';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <header className='logo-container py-8'>
      <div className='container mx-auto hidden'>
        <div className='flex '>
          <a href='#'>
            <img className='logo' src={Logo} alt='Logo' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
