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
    console.log('FIRE');
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
        history.push('/poolChat');
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
        <div>
        <form className="my-form" onSubmit={this.createToken} >
          <input required type="hidden" name="token" id="token" />
          <div className='firstAndLastName'>
          <label>
          <span>First Name</span>
          <br/><br/>
          <input required onChange={this.handleForm.bind(this)} className="inp-first-name" name="first_name" />
          </label>
          <label>
          <span>Last Name</span>
          <br/><br/>
          <input required onChange={this.handleForm.bind(this)} className="inp-last-name" name="last_name"/>
          </label>
          </div>
          <br/><br/>
          <div className='addressField'>
          <legend>Address</legend>
          <label>
            <span>Street Address Line 1</span>
            <input required onChange={this.handleForm.bind(this)} className="inp-street-address1" name="line1" />
          </label>
          <label>
            <span>City</span>
            <input required onChange={this.handleForm.bind(this)} className="inp-city" name="city" />
          </label>
          <label>
            <span>State</span>
            <input required onChange={this.handleForm.bind(this)} className="inp-state" name="state" />
          </label>
          <label>
            <span>Postal Code</span>
            <input required onChange={this.handleForm.bind(this)} className="inp-zip" name="zip" />
          </label>
        </div>
        <div>
        <p>By clicking, you agree to <a href="#">our terms</a> and the <a href="/connect-account/legal">Stripe Connected Account Agreement</a>.</p>
        </div>
        <div className='submitBtn'>    
        <button type='submit'>Submit</button>
        </div> 
      </form>
      </div>
          )
          :
          (
      <div>
      <form onSubmit={this.createCardToken}>
          <label>
            Card number
            <CardNumberElement
          />
          </label>
          <label>
            Expiration date
            <CardExpiryElement
            />
          </label>
          <label>
            CVC
            <CardCVCElement
            />
          </label>
          <label>
            Postal code
            <PostalCodeElement
            />
          </label>
          <p>By clicking, you agree to <a href="#">our terms</a> and the 
          <a href="/connect-account/legal">Stripe Connected Account Agreement</a>.</p>
          <button type='submit'>Pay</button>
        </form>
        </div>
          )
        }
      </div>
    );
  }
}


export default injectStripe(Transactions);
















































// import React, { Component } from 'react';  
// import { 
//   CardElement,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement,
//   PostalCodeElement,
//   PaymentRequestButtonElement,
//   injectStripe
// } from 'react-stripe-elements';
// import axios from 'axios'; 


// const stripe = Stripe('pk_test_z4MoEuHo0RIJC8oV0K6xhsO1')


// class Transactions extends Component {
//   constructor() {
//     super();
//     this.state = {
//       first_name: '',
//       last_name: '',
//       line1: '',
//       city: '',
//       state: '',
//       postal_code: '', 
//       tos_shown_and_accepted: false,
//       email: JSON.parse(localStorage.storage).email
//     }
//   }

//   createToken = async () => {
//     try { 
//       const { first_name, last_name, line1, city, state, postal_code, tos_shown_and_accepted, email } = this.state; 
//       const body = {
//         first_name, 
//         last_name,
//         email,
//         line1,
//         city,
//         state,
//         postal_code,
//         tos_shown_and_accepted
//       }

//       const data = await axios.post('http://localhost:3000/api/stripe/createAccount', body);
//       if (data === 'Success') {
//         // this.props.history.push('/poolChat');
//       }
//     } catch(err) {
//       console.log('Error from Payments inside createCustomAccount - ', err)
//     }
//   }

//   handleBlur = () => {
//     console.log('[blur]')
//   }

//   onChange = (e) => {
//     console.log('[change]', change)
//   }

//   onFocus = () => {
//     console.log('[focus]')
//   }

//   onReady = () => {
//     console.log('[ready]')
//   }

//   render() {
//     console.log('component  = ', CardNumberElement);
//     return (
//       <form onSubmit={this.createToken}>
//         <label>
//           Card number
//           <CardNumberElement
//           />
//         </label>
//         <label>
//           Expiration date
//           <CardExpiryElement
//           />
//         </label>
//         <label>
//           CVC
//           <CardCVCElement
//           />
//         </label>
//         <label>
//           Postal code
//           <PostalCodeElement
//           />
//         </label>
//         <p>By clicking, you agree to <a href="#">our terms</a> and the 
//         <a href="/connect-account/legal">Stripe Connected Account Agreement</a>.</p>
//         <button>Pay</button>
//       </form>
//     );
//   }
// }


// export default injectStripe(Transactions);
