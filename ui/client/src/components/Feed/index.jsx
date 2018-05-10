import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import SearchFilter from './SearchFilter.jsx';
import NearByRestaurants from './NearByRestaurants.jsx';
import Logout from '../Auth/Logout.jsx';
import Menu from '../Menu/Menu.jsx';

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
  //User information name, email, id, phone etc
  usersLogin: state.usersLogin
})
export default connect(mapStateToProps)(Feed);