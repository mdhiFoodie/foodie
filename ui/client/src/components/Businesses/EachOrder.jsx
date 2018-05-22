import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { usersInformation } from '../../actions/type';

import './Business.scss';

class EachOrder extends Component {
  constructor() {
    super();
  }

  render() {
    const { usersInfo } = this.props.getUsersInformation;
    console.log('PROPS FROM EACH ORDER', this.props.order);
    return(
      <div className='insideOrder'>

        {
          this.props.order && this.props.order.length ? this.props.order.map(item => 
            {`${item.quantity} ${item.item} ${item.price}`}
          )
          :
          null 
        } 

      </div>
    )
  }
}

const mapStateToProps = state => ({
  // usersData is the key coming from our root reducers with the value of our reducer file
  getUsersInformation: state.getUsersInformation
  
});

export default connect(mapStateToProps, null)(EachOrder);