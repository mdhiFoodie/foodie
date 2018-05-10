import React, { Component } from 'react';

class NearByRestaurantsEntries extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.restaurant[0]} {this.props.restaurant[1]}
      </div>
    )
  }
};

export default NearByRestaurantsEntries;