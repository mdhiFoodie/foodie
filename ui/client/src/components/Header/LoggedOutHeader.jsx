import React from 'react';
import { Link } from 'react-router-dom'

import './Header.scss';

const LoggedOutHeader = () => (
  <header>
    <nav>
      <ul>
        <li>Logo</li>
        <li><Link to='/'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ul>
    </nav>
  </header>
)

export default LoggedOutHeader;