import React, { Component } from 'react';  
import {Elements} from 'react-stripe-elements';
import { injectStripe } from 'react-stripe-elements'; 
import axios from 'axios'; 
import Transactions from './Transactions.jsx'; 

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      setupBegan: false, 
      isLoadingFieldsNeeded: true, 
      error: null, 
      email: JSON.parse(localStorage.storage).email
    }
  }


  createACustomAccount = async () => {
    try { 
      const data = await axios.post('http://localhost:3000/api/stripe/createAccount');
      if (data.data === 'Success') {
        this.props.history.push('/poolChat');
      }
    } catch(err) {
      console.log('Error from Payments inside createCustomAccount - ', err)
    }
  }

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

      <button onClick={this.createACustomAccount}>Get users account</button>
    </div> 
    )
  }
}

export default Payment;
