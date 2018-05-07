import React, { Component } from 'react';
import SearchFilter from './SearchFilter.jsx';
import NearByRestaurants from './NearByRestaurants.jsx';

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

      </div>
    )
  }
}

export default Feed;