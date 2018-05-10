import React, { Component } from 'react';

class NearByRestaurantsEntries extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        this is the entries
        {this.props.restaurant}
      </div>
    )
  }
};

export default NearByRestaurantsEntries;