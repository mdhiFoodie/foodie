import React from 'react';
import { Link } from 'react-router-dom'

import fontawesome from '@fortawesome/fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart'

fontawesome.library.add(faHome)
fontawesome.library.add(faUser)
fontawesome.library.add(faComment);
fontawesome.library.add(faShoppingCart);

import './Header.scss';

const UserHeader = () => (
  <header>
    <nav>
      <ul>
        <li><Link to=''><i className="fas fa-home icon"></i><br/>home</Link></li>
        <li><Link to='/userProfile'><i className="fas fa-user icon"></i><br/>profile</Link></li>
        <li><Link to='/message'><i className="fas fa-comment icon"></i><br/>message</Link></li>
        <li><Link to='/myPool'><i className="fas fa-shopping-cart icon"></i><br/>cart</Link></li>
      </ul>
    </nav>
  </header>
)

export default UserHeader;
