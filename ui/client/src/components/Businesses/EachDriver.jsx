import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { usersInformation } from '../../actions/type';

import './Business.scss';

class EachDriver extends Component {
  constructor() {
    super();
  }
/** 
 * Driver's information 
 * Driver's stars 
*/
  render() {
    const { usersInfo } = this.props.getUsersInformation;
    return(
      <div className='insideDriver'>
        <div>
        {this.props.driver.name}
        </div>
        <div className='driversPicture'>
        <img src='#' />
        </div>
        <div>
          Rating
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // usersData is the key coming from our root reducers with the value of our reducer file
  getUsersInformation: state.getUsersInformation
  
});

export default connect(mapStateToProps, null)(EachDriver);
