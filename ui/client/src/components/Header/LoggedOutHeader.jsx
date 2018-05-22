import React from 'react';
import { Link } from 'react-router-dom'

import './Header.scss';

const LoggedOutHeader = () => (
  <header>
    <nav>
      <ul>
        <li><div className='headerText'>foodie</div></li>
        <li><img className='headerLogo' src='/foodie-header-logo.png'/></li>
      </ul>
    </nav>
  </header>
)

export default LoggedOutHeader;