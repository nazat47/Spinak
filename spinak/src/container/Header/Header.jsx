import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Dine in Style, Taste the Excellence</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Indulge in a symphony of flavors that dance on your palate, where every dish tells a story and every bite creates a memory.</p>
      <button className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;