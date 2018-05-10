import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Feed from './Feed/index.jsx';
import Login from './Auth/Login.jsx';
import SignupUser from './Auth/SignupUser.jsx'; 
import SignupBusiness from './Auth/BusinessSignup/SignupBusiness.jsx'; 
import Logout from './Auth/Logout.jsx'; 
import BusinessDashboard from './Businesses/BusinessDashboard.jsx'; 
import LoggedOutHeader from './Header/LoggedOutHeader.jsx'
import UserHeader from './Header/UserHeader.jsx'
import BusinessHeader from './Header/BusinessHeader.jsx'
import DeliveryHeader from './Header/DeliveryHeader.jsx'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch> 
          <Route exact path='/login' component={LoggedOutHeader}/>
          <Route exact path='/signupUser' component={LoggedOutHeader}/>
          <Route exact path='/signupBusiness' component={LoggedOutHeader}/>
          <Route exact path='/home' component={UserHeader}/>
          <Route exact path='/' component={UserHeader}/>
          <Route exact path='/profile' component={UserHeader}/>
          <Route exact path='/dashboard' component={BusinessHeader}/>
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
      <Switch> 
        <Route exact path='/login' component={Login}/>
        <Route exact path='/home' component={Feed}/>
        <Route exact path='/signupUser' component={SignupUser}/>
        <Route exact path='/signupBusiness' component={SignupBusiness}/>
        <Route exact path='/dashboard' component={BusinessDashboard}/>
      </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;