import React, { Component } from 'react';  
import {Elements} from 'react-stripe-elements';
// import { connect } from 'react-redux';
import { injectStripe } from 'react-stripe-elements'; 
// import { usersInformation } from '../../actions/type';
import axios from 'axios'; 
import Transactions from './Transactions.jsx'; 


class Payment extends Component {
  constructor() {
    super();
    this.state = {
      setupBegan: false, 
      isLoadingFieldsNeeded: true, 
      error: null
    }
    this.fetchFieldsNeeded = this.fetchFieldsNeeded.bind(this); 
  }

  componentWillMount() {
    this.fetchFieldsNeeded(); 
  }

  fetchFieldsNeeded = async () => {
    const data = await axios.post('/api/stripe/account/get');
    const {success, message, setupBegan} = data; 
    if (success) {
      this.setState({
        setupBegan,
        isLoadingFieldsNeeded: false, 
      }); 
    } else  {
      this.setState({
        error: message, 
        isLoadingFieldsNeeded: false, 
      });
    }
  }

  render() {
    const {
      isLoadingFieldsNeeded,
      setupBegan,
      error
    } = this.state; 
    if (isLoadingFieldsNeeded) {
      return (
        <p>Loading....</p>
      )
    } 
    if (!setupBegan) {
      return (
      <div>
        {
          (error) ? (
            <p>{error}</p>
          ) 
          :
          (null)
        }
        <button>
          Begin Setup 
        </button>
        <p>By clicking setup you agree to the TOS for Stripe and us</p>
      </div>
      )
    }
    // const { usersInfo } = this.props.getUsersInformation;
    return(
      <div>
        {
          (error) ? (
            <p>{error}</p>
          ) 
          :
          (null)
        }
        <p>Start adding Stripe elements</p>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   getUsersInformation: state.getUsersInformation
  
// });

export default Payment;
