import React, { Component } from 'react';  
import {Elements} from 'react-stripe-elements';
// import { connect } from 'react-redux';
import { injectStripe } from 'react-stripe-elements'; 
// import { usersInformation } from '../../actions/type';
import axios from 'axios'; 
import Transactions from './Transactions.jsx'; 

// const { storage } = localStorage || JSON.parse(localStorage); 

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      setupBegan: false, 
      isLoadingFieldsNeeded: true, 
      error: null, 
      email: 'michael@gmail.com'
    }
  }

  // componentWillMount() {
  //   this.fetchFieldsNeeded(); 
  // }

  fetchFieldsNeeded = async () => {
    /**
     * Spin and let customer know that if they refresh or resubmit all their changes
     * will be lost. A counter to dissable onClick after first try 
     */
    const { email } = this.state;
    const body = {
      email, 
      total 
    };
    const { data } = await axios.post('http://localhost:3000/api/stripe/verifyStripeToken', body);
    console.log('Data from server', data)
    if (data) {
      
    }
  }

  /**
   * After getting token back push user to poolChat
   */

  render() {
  return (
    <div>
      {/* <form id="payment-form">
    Card Number
    <input type="text" size="20" data-stripe="number" value="4242424242424242" />

    Expiration (MM/YY)
    <input type="text" size="2" data-stripe="exp_month" value="12" />
    <input type="text" size="2" data-stripe="exp_year" value="17" />

    CVC
    <input type="text" size="4" data-stripe="cvc" value="123" />

    Billing Zip
    <input type="text" size="6" data-stripe="address_zip" value="12345" />

    <input type="submit" class="submit" value="Submit Payment" />
    </form> */}

      <button onClick={this.fetchFieldsNeeded}>Get users account</button>
    </div> 
    )
  }
}

// const mapStateToProps = state => ({
//   getUsersInformation: state.getUsersInformation
  
// });

export default Payment;
