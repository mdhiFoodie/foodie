import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Feed from './Feed/index.jsx';
import Login from './Auth/Login.jsx';
import SignupUser from './Auth/SignupUser.jsx'; 
import SignupBusiness from './Auth/BusinessSignup/SignupBusiness.jsx'; 
import Logout from './Auth/Logout.jsx'; 

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Switch> 
        <Route exact path='/' component={Login}/>
        <Route exact path='/home' component={Feed}/>
        <Route exact path='/signupUser' component={SignupUser}/>
        <Route exact path='/signupBusiness' component={SignupBusiness}/>
      </Switch>
      </div>
    )
  }
}

export default App;