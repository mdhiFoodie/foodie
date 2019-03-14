import React, { Component } from 'react';  
import { Elements } from 'react-stripe-elements';
import axios from 'axios'; 
import Transactions from './Transactions.jsx';


class Payment extends Component {
  constructor() {
    super();
  }

  render() {
  return (
    <div>
      <Elements>
        <Transactions history={this.props.history} /> 
      </Elements>
    </div> 
    );
  }
}

export default Payment;
