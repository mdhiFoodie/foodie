import React from 'react';
import { Link } from 'react-router-dom'

import './Header.scss';


const BusinessHeader = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/businessProfile'>Profile</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/delivery'>Delivery</Link></li>
      </ul>
    </nav>
  </header>
)


export default BusinessHeader;
