import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { usersInformation } from '../../actions/type';
import axios from 'axios'; 

import './Business.scss';

class Payment extends Component {
  constructor() {
    super();
  }

  handlePayment = async () => {
    axios.post('', ) 
  }

  render() {
    const { usersInfo } = this.props.getUsersInformation;
    return(
      <div>
      <form onSubmit={this.handlePayment}>
        <script
        src="https://checkout.stripe.com/checkout.js" className="stripe-button"
        data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
        data-amount="999"
        data-name="Stripe.com"
        data-description="Example charge"
        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
        data-locale="auto"
        data-zip-code="true">
        </script>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  getUsersInformation: state.getUsersInformation
  
});

export default connect(mapStateToProps, null)(Payment);
