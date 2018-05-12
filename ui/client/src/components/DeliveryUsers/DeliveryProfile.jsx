import React, { Component } from 'react'; 
import Logout from '../Auth/Logout.jsx'; 

class DeliveryProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hello world from deliveryProfile!
        <Logout history={this.props.history}/>
      </div>
    )
  }
}

export default DeliveryProfile; 