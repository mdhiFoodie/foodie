import React, { Component } from 'react';
import axios from 'axios';

import './userProfile.scss';

class userProfile extends Component {
  constructor() {
    super();

  }

  getUsersOrderHistory = async () => {
    
  }



  render() {
    return (
      <div className='userProfile'>
        <div className='userPicture'></div>
        <div className='friends'></div>
        <div className='ordersHistory'>
          <div className='profileHeader'>
            History
          </div>


        </div>
      </div>
    );
  }
}

export default userProfile;