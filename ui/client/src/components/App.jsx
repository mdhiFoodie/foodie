import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Feed from './Feed/index.jsx';
import Login from './Auth/Login.jsx';
import SignupUser from './Auth/SignupUser.jsx'; 
import SignupBusiness from './Auth/BusinessSignup/SignupBusiness.jsx'; 
import Logout from './Auth/Logout.jsx'; 
import BusinessDashboard from './Businesses/BusinessDashboard.jsx'; 

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
        <Route exact path='/' component={Login}/>
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