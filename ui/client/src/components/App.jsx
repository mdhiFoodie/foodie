import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Feed from './Feed/index.jsx';
import Login from './Auth/Login.jsx';
import SignupUser from './Auth/SignupUser.jsx'; 
import SignupBusiness from './Auth/BusinessSignup/SignupBusiness.jsx'; 
import AddDelivery from './Businesses/AddDelivery.jsx';
import Protected from './Protected/index.js';
import DeliveryProfile from './DeliveryUsers/DeliveryProfile.jsx'; 
import BusinessProfile from './Businesses/BusinessProfile.jsx'; 
import Logout from './Auth/Logout.jsx'; 
import BusinessDashboard from './Businesses/BusinessDashboard.jsx'; 
import LoggedOutHeader from './Header/LoggedOutHeader.jsx';
import Header from './Header/Header.jsx';
import UserHeader from './Header/UserHeader.jsx';
import BusinessHeader from './Header/BusinessHeader.jsx';
import DeliveryHeader from './Header/DeliveryHeader.jsx';
import Menu from './Menu/Menu.jsx';
import MyPool from './OpenPool/MyPool.jsx';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const type = localStorage.storage ? JSON.parse(localStorage.storage).type : 'loggedout';
    return (
      <div>
          <Switch>
            <Route path='/' component={(props) => (
              <Header {...props}/>
            )}/>
          </Switch>
          <Switch> 
            
            <Route exact path='/' component={
              type === 'loggedout' 
              ? 
              Login 
              : 
              type === '0' 
              ? 
              Feed 
              :
              BusinessDashboard}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/businessProfile' component={BusinessProfile}/>
            <Route path='/businessProfile/:nameid' component={BusinessProfile}/>
            <Route exact path='/signupUser' component={SignupUser}/>
            <Route exact path='/signupBusiness' component={SignupBusiness}/>
            <Route exact path='/home' component={(props) => (
              <Protected component={Feed} {...props} />
            )}/>
            <Route exact path='/dashboard' component={(props) => (
              <Protected component={BusinessDashboard} {...props} />
            )}/>
            <Route exact path='/myPool' component={(props) => (
              <Protected component={MyPool} {...props} />
            )}/>
            <Route exact path='/deliveryProfile' component={(props) => (
              <Protected component={DeliveryProfile} {...props} />
            )}/>
            <Route exact path='/AddDelivery' component={(props) => (
              <Protected component={AddDelivery} {...props} />
            )}/>
          </Switch>
      </div>
    )
  }
}

export default App;