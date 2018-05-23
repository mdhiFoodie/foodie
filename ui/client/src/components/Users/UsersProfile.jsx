import React, { Component } from 'react';
import axios from 'axios';
import ArchivedOrders from './ArchivedOrders.jsx';

import './userProfile.scss';

class userProfile extends Component {
  constructor() {
    super();
    this.state = {}; 
  }

  componentWillMount = async () => {
    try {
    const payload = {
      userId: JSON.parse(localStorage.storage).id 
    }
    const getHistory = await axios.post('http://localhost:3000/api/orders/getUserHistory', payload)
    this.setState({
      history: getHistory
    }); 
    console.log('Get order history -', getHistory);
    } catch (err) {
      console.log('Error getting users order history - ', err)
    }
  }

  render() {
    return (
      <div className='userProfile'>
        <div className='userPicture'>
        
        </div>
        <div className='ordersHistory'>
          <div className='profileHeader'>
            <h1>History</h1>
          </div>
          <div className='archivedOrders'>
            <ArchivedOrders orders={this.state.history} />
          </div>
        </div>
      </div>
    );
  }
}

export default userProfile;