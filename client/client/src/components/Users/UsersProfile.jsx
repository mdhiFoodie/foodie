// import React, { Component } from 'react';
// import axios from 'axios';

// import './userProfile.scss';

// class userProfile extends Component {
//   constructor() {
//     super();

//   }

//   getUsersOrderHistory = async () => {
//     try {
//     const payload = {
//       userId: JSON.parse(localStorage.storage).id 
//     }
//     const getHistory = await axios.post('http://localhost:3000/api/orders/getUserHistory', payload)
//     console.log('Get order history -', getHistory);
//     } catch (err) {
//       console.log('Error getting users order history - ', err)
//     }
//   }

//   render() {
//     return (
//       <div className='userProfile'>
//         <div className='userPicture'></div>
//         <div className='friends'></div>
//         <div className='ordersHistory'>
//           <div className='profileHeader'>
//             History
//           </div>
//           <button onClick={this.getUsersOrderHistory}>Get history</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default userProfile;

import React, { Component } from 'react';
import axios from 'axios';
import ArchivedOrders from './ArchivedOrders.jsx';
import Logout from '../Auth/Logout.jsx';


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
    const {data} = await axios.post('http://localhost:3000/api/orders/getUserHistory', payload)
    this.setState({
      history: data
    }); 
    console.log('Get order history -', data);
    } catch (err) {
      console.log('Error getting users order history - ', err)
    }
  }

  logout() {
    this.history.push('/login')
  }

  render() {

    return (
      <div className='userProfile'>
        <div className='userPicture'>
          <img src='https://i.imgur.com/puf5KEL.jpg' />
          <div className='plusPicture'>
            +
          </div>
          <div className='userProfileName'></div>
        <Logout className='settingDropBtn' history={this.props.history}/>
        </div>
        <div className='profileHeader'>
          <h1>history</h1>
        </div>
        <div className='ordersHistory'>
          <ArchivedOrders orders={this.state.history} />
        </div>
      </div>
    );
  }
}

export default userProfile;