import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { usersInformation } from '../../actions/type';

import './Business.scss';

import fontawesome from '@fortawesome/fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
fontawesome.library.add(faStar);

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
          <div>
            <i className="fas fa-star starIcon"></i>
            <i className="fas fa-star starIcon"></i>
            <i className="fas fa-star starIcon"></i>
            <i className="fas fa-star starIcon"></i>
            <i className="fas fa-star starIcon"></i>
          </div>
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
