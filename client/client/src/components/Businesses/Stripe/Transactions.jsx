import React, { Component } from 'react';  
import { 
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  injectStripe
} from 'react-stripe-elements';
import axios from 'axios'; 


const stripe = Stripe('pk_test_z4MoEuHo0RIJC8oV0K6xhsO1');

class Transactions extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      line1: '',
      city: '',
      state: '',
      postal_code: '', 
      tos_shown_and_accepted: false,
      email: JSON.parse(localStorage.storage).email, 
      finishInfo: false
    }
  }

  createToken = async (e) => {
    e.preventDefault(); 
    this.setState({
      tos_shown_and_accepted: true
    }); 
    try { 
      const { first_name, last_name, line1, city, state, postal_code, tos_shown_and_accepted, email } = this.state; 
      const body = {
        first_name, 
        last_name,
        email,
        line1,
        city,
        state,
        postal_code,
      }
      const { token } = await this.props.stripe.createToken('account', {
        legal_entity: {
          first_name,
          last_name,
          address: {
            line1,
            city,
            state,
            postal_code,
          },
        },
        tos_shown_and_accepted: true,
      });
      console.log(token) 
      if (token)  {
      const body = {
        email, 
        account_token: token.id
      }
      const data = await axios.post('http://localhost:3000/api/stripe/createAccount', body);
      this.setState({
        finishInfo: true
      }); 
    }
    } catch(err) {
      console.log('Error from Payments inside createCustomAccount - ', err)
    }
  }

  createCardToken = async (e) => {
    e.preventDefault(); 
    const { history } = this.props; 
    const { first_name, last_name, email} = this.state; 
    try {
      const { token } = await this.props.stripe.createToken({
        type: 'card',
        name: `${first_name} ${last_name}`
      }); 
      const body = {
        source: token.id, 
        email,
        name: `${first_name} ${last_name}`
      }
      const data = await axios.post('http://localhost:3000/api/stripe/createCustomerId', body);
      if (data) {
        alert('We have successfully created your account');
        history.push('/messages');
      }
    } catch (err) {
      console.log('Error from create card token on Transactions component -', err); 
    }
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        {
          !this.state.finishInfo ? 
          (
        <div className='paymentContainer'>
        <form className="my-form" onSubmit={this.createToken} >
          <input required type="hidden" name="token" id="token" />
          <div className='firstAndLastName'>
            <input required onChange={this.handleForm.bind(this)} className="inp-first-name" name="first_name" placeholder='first name'/>
            <input required onChange={this.handleForm.bind(this)} className="inp-last-name" name="last_name" placeholder='last name'/>
          </div>  
          <div className='addressField'>
            <input required onChange={this.handleForm.bind(this)} className="inp-street-address1" name="line1" placeholder='street address'/>
            <input required onChange={this.handleForm.bind(this)} className="inp-city" name="city" placeholder='city'/>
            <input required onChange={this.handleForm.bind(this)} className="inp-state" name="state" placeholder='state'/>          
            <input required onChange={this.handleForm.bind(this)} className="inp-zip" name="zip" placeholder='postal code'/>
          </div>
        <div className='terms'>
          By clicking, you agree to <a href="#">our terms</a> and the <a href="/connect-account/legal">Stripe Connected Account Agreement</a>.
        </div>
        <div className='submitBtn'>    
        <button type='submit'>submit</button>
        </div> 
      </form>
      </div>
          )
          :
          (
      <div className='paymentContainer'>
      <form className='my-form' onSubmit={this.createCardToken}>
          <div className='cardElement'>
            card number
            <CardNumberElement
            style={{
              base: {
                  iconColor: '#E6E6E6',
                  color: '#31325F',
                  lineHeight: '40px',
                  fontWeight: 300,
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSize: '12px',
  
                  '::placeholder': {
                      color: '#CFD7E0',
                  }
              }
          }}
          />
          </div>
          <div className='cardElement'>
            expiration date
            <CardExpiryElement 
            style={{
              base: {
                  iconColor: '#E6E6E6',
                  color: '#31325F',
                  lineHeight: '40px',
                  fontWeight: 300,
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSize: '12px',
                  textAlign: 'left',
  
                  '::placeholder': {
                      color: '#CFD7E0',
                  }
              }
          }}
            />
          </div>
          <div className='cardElement'>
            cvc
            <CardCVCElement
            style={{
              base: {
                  iconColor: '#E6E6E6',
                  color: '#31325F',
                  lineHeight: '40px',
                  fontWeight: 300,
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSize: '12px',
  
                  '::placeholder': {
                      color: '#CFD7E0',
                  }
              }
          }}
            />
          </div>
          <div className='cardElement'>
            postal code
            <PostalCodeElement
            style={{
              base: {
                  iconColor: '#E6E6E6',
                  borderBottom: 'thin, solid, #848484',
                  borderLeft: 'thin, solid, #848484',
                  color: '#31325F',
                  lineHeight: '40px',
                  fontWeight: 300,
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSize: '12px',
  
                  '::placeholder': {
                      color: '#CFD7E0',
                  }
              }
          }}
            />
          </div>
          <div className='submitBtn'>
          <button type='submit'>submit</button>
          </div>
        </form>
        </div>
          )
        }
      </div>
    );
  }
}


export default injectStripe(Transactions);