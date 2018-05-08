import React, { Component } from 'react';
import SearchFilter from './SearchFilter.jsx';
import NearByRestaurants from './NearByRestaurants.jsx';
import Logout from '../Auth/Logout.jsx';

class Feed extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  // componentWillMount() {

  // }

  render() {
    return(
      <div className='FeedContainer'>
      
        <div>
          <SearchFilter/>
        </div>

        <div>
          <NearByRestaurants/>
        </div>
        <Logout history={this.props.history}/>
      </div>
    )
  }
}

export default Feed;