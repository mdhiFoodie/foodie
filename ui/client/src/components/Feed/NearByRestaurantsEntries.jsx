import React, { Component } from 'react';
import BusinessProfile from '../Businesses/BusinessProfile.jsx';

import './Feed.scss'; 

class NearByRestaurantsEntries extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return(
      <div onClick={()=> this.props.history.push(`/businessProfile/${this.props.restaurant[1]}~${this.props.restaurant[0]}`)} className='eachRestaurant' style={{backgroundImage: `url(${this.props.restaurant[2]})`}}>
        {this.props.restaurant[1]}
      </div>
    )
  }
};

export default NearByRestaurantsEntries;