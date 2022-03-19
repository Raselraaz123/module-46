import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav className='nav-all'>
        <a className='nav-style' href="/home">Home</a>
        <a className='nav-style' href="/about us">About us</a>
        <a className='nav-style' href="/call">Call</a>
        <a className='nav-style' href="/log in">Log in</a>
      </nav>
    </div>
  );
};

export default Header;