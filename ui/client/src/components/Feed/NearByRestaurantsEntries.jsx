import React, { Component } from 'react';
import BusinessProfile from '../Businesses/BusinessProfile.jsx';

import './Feed.scss'; 

class NearByRestaurantsEntries extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return(
      <div onClick={()=> this.props.history.push('/businessProfile')} className='eachRestaurant'>
        {this.props.restaurant[0]} {this.props.restaurant[1]}
      </div>
    )
  }
};

export default NearByRestaurantsEntries;