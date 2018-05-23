import React, { Component } from 'react';
import axios from 'axios';

import './userProfile.scss';

class ArchivedOrders extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='archivedContainers'>
        <div className='orderHistPic'>
          <img src='#' />
        </div>
        <div className='orderHistName'>
          
        </div>
        <div className='orderHistRating'>
        </div>
        <div className='orderInformation'>

        </div>
        <div className='orderHistPrice'>

        </div>
      </div>
    );
  }
}

export default ArchivedOrders;