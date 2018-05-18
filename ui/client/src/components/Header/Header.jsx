import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux'; 

import LoggedOutHeader from './LoggedOutHeader.jsx'
import UserHeader from './UserHeader.jsx'
import BusinessHeader from './BusinessHeader.jsx'
import DeliveryHeader from './DeliveryHeader.jsx'

const storage = localStorage.storage && JSON.parse(localStorage.storage);

class Header extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log('Patrick wants this string ot be here. he can\'t speel:', this.props.getUsersInformation);
    const type = localStorage.storage ? JSON.parse(localStorage.storage).type : 'loggedout';
    return (
      <div>
        
        <BrowserRouter>
        {
        this.props.getUsersInformation.usersInfo.type === '0' || type === '0' ?
        (console.log('we are users mothas', localStorage.storage ? JSON.parse(localStorage.storage).type : 'pent'),
        <UserHeader />
        )
        :
        this.props.getUsersInformation.usersInfo.type === '1' || type === '1' ?
        (console.log('we are business mothas', type),
        <BusinessHeader history={this.props.history} />
        )
        :  
        this.props.getUsersInformation.usersInfo.type === '2' || type === '2' ?
        (console.log('we are deilvery mothas', type),
        <DeliveryHeader />
        )
        :
        type === 'loggedout' ? 
        (console.log('we are logged out mothas', type) ,
        <LoggedOutHeader />)
        :
        <div/>
        }
        </BrowserRouter>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  //User information name, email, id, phone etc when they login or signup 
  getUsersInformation: state.getUsersInformation,

})
export default connect(mapStateToProps)(Header);