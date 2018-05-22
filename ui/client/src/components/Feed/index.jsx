import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import SearchFilter from './SearchFilter.jsx';
import NearByRestaurants from './NearByRestaurants.jsx';
import Logout from '../Auth/Logout.jsx';
import OpenPools from '../OpenPool/index.jsx';
import Menu from '../Menu/Menu.jsx';

import './Feed.scss';

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

        <div className='profileHeader'>
            <h1>nearby restaurants</h1>
        </div>

        <div>
          <NearByRestaurants history={this.props.history} />
        </div>

        <div className='profileHeader'>
            <h1>open pools</h1>
        </div>
        <div>
          <OpenPools />
        </div>

        <Logout history={this.props.history}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //User information name, email, id, phone etc when they login or signup 
  getUsersInformation: state.getUsersInformation,

})
export default connect(mapStateToProps)(Feed);