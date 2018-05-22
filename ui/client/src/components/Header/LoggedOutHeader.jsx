import React from 'react';
import { Link } from 'react-router-dom'

import './Header.scss';

const LoggedOutHeader = () => (
  <header>
    <nav >
      <ul>
        <li className='loggedOutHeader'>foodie</li>
        {/* <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signupUser'>Signup</Link></li> */}
      </ul>
    </nav>
  </header>
)

export default LoggedOutHeader;