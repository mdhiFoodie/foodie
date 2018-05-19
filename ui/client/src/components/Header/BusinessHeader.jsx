import React from 'react';
import { Link } from 'react-router-dom'

import fontawesome from '@fortawesome/fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faList from '@fortawesome/fontawesome-free-solid/faList'
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck'
import faSitemap from '@fortawesome/fontawesome-free-solid/faSitemap'

fontawesome.library.add(faHome)
fontawesome.library.add(faUser)
fontawesome.library.add(faList);
fontawesome.library.add(faTruck);
fontawesome.library.add(faSitemap);

import './Header.scss';



const BusinessHeader = () => (
    <nav>
      <ul>
        <li><Link to='/dashboard'><i className="fas fa-home icon"></i><br/>dashboard</Link></li>
        <li><Link to={`/businessProfile/${JSON.parse(localStorage.storage).name}~${JSON.parse(localStorage.storage).id}`}><i className="fas fa-user icon"></i><br/>profile</Link></li>
        <li><Link to='/orders'><i className="fas fa-sitemap icon"></i><br/>orders</Link></li>
        <li><Link to='/menu'><i className="fas fa-list icon"></i><br/>menu</Link></li>
        <li><Link to='/delivery'><i className="fas fa-truck icon"></i><br/>delivery</Link></li>
      </ul>
    </nav>
)


export default BusinessHeader;
