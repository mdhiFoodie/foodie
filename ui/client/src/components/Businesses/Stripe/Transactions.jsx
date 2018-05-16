// import React, { Component } from 'react';  
// import {injectStripe} from 'react-stripe-elements';
// // import { connect } from 'react-redux';
// // import { Elements } from 'react-stripe-elements'; 
// import axios from 'axios'; 
// import AddressSection from './AddressSection.jsx';
// import CardSection from './CardSection.jsx';

// class Transactions extends Component {
//   constructor() {
//     super();
//   }

//   handleSubmit = async (ev) => {
//     // We don't want to let default form submission happen here, which would refresh the page.
//     ev.preventDefault();
//     const stripeToken = await this.props.createToken({name: 'Jenny Rosen'}); 
//     console.log(stripeToken); 
//     // Within the context of `Elements`, this call to createToken knows which Element to
//     // tokenize, since there's only one in this group.
//     // this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
//     //   console.log('Received Stripe token:', token);
//     // });

//     // However, this line of code will do the same thing:
//     // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
//   }

//   render() {
//     // const { usersInfo } = this.props.getUsersInformation;
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <AddressSection />
//         <CardSection />
//         <button>Confirm order</button>
//       </form>
//     )
//   }
// }


// export default injectStripe(Transactions);
