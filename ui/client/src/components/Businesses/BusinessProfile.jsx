import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';
import Menu from '../Menu/Menu.jsx';
import Logout from '../Auth/Logout.jsx'

class BusinessProfile extends Component {
  constructor() {
    super();
  }
  
  render() {
    console.log('dash', this.props.getUsersInformation)
    return(
      <div className='profileContainer'>
        <div className='coverPhoto'>
          <img src='http://placecorgi.com/900/200'></img>
        </div>
        <div className='profilePhoto'>
          <img src='http://placecorgi.com/200/200'></img>
          <div className='rating'>5 Stars</div>
        </div>
       
        <div className='profileName'>
          <Logout />
          Business Name
          <div className='subText'>
             <div className='category'>Category</div>
             <div className='address'>Address</div>
          </div>
          <div className='subText2'>
            <div className='phone'>phone number</div>
            <div className='price'>price point</div>
          </div>
        </div>
        <h1>menu</h1>
        <div className='menu'>
          <Menu />
        </div>
        <h1>open pools</h1>
        <div className='openPools'>
          These are the open pools.
        </div>
        <h1>reviews</h1>
        <div className='reviews'>
          These are the reviews for the business.
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // usersData is the key coming from our root reducers with the value of our reducer file
  getUsersInformation: state.getUsersInformation
  
})

// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//   usersInfo: usersInfo
//   }, dispatch);
// };
// export default connect(mapStateToProps, matchDispatchToProps)(Login);
export default connect(mapStateToProps, null)(BusinessProfile);
