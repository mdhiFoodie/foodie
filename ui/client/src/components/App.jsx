import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Feed from './Feed/index.jsx';
import Login from './Auth/Login.jsx';
import Signup from './Auth/Signup.jsx'; 
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
        <Route exact path='/homepage' component={Feed}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
      </div>
    )
  }
}

export default App;