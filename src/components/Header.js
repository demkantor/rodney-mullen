import React from 'react';

import Footer from './Footer';
import avatar from '../assets/images/avatar.jpg';

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Rodney Mullen</strong>, Professional Skateboarder
        <br />
        entrepreneur, inventor, and public speaker
        <br />
        hero to many.
      </h1>
    </div>
    <Footer />
  </header>
);

export default Header;
