import React, { Component } from 'react';
import axios from 'axios';

import './userProfile.scss';

class userProfile extends Component {
  constructor() {
    super();

  }

  getUsersOrderHistory = async () => {
    try {
    const payload = {
      userId: JSON.parse(localStorage.storage).id 
    }
    const getHistory = await axios.post('http://localhost:3000/api/orders/getUserHistory', payload)
    console.log('Get order history -', getHistory);
    } catch (err) {
      console.log('Error getting users order history - ', err)
    }
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
          <button onClick={this.getUsersOrderHistory}>Get history</button>
        </div>
      </div>
    );
  }
}

export default userProfile;