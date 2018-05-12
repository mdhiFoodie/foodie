import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import SearchFilter from './SearchFilter.jsx';
import NearByRestaurants from './NearByRestaurants.jsx';
import Logout from '../Auth/Logout.jsx';
import Menu from '../Menu/Menu.jsx';

import './Feed.scss';

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.getUsersInformation)
    console.log(this.props.usersData)
    return(
      <div className='FeedContainer'>
      
        <div>
          <SearchFilter/>
        </div>
        <div>
          <NearByRestaurants/>
        </div>
        <div>
          <Menu />
        </div>

        <Logout history={this.props.history}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //User information name, email, id, phone etc when they login or signup 
  getUsersInformation: state.getUsersInformation,
  //
  usersData: state.usersData


})
export default connect(mapStateToProps)(Feed);