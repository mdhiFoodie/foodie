import React, { Component } from 'react';  
import { Elements } from 'react-stripe-elements';
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
      <Elements>
        <Transactions /> 
      </Elements>
    </div> 
    );
  }
}

export default Payment;
