import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Feed from './Feed/index.jsx';
import Login from './Auth/Login.jsx';
import Signup from './Auth/Signup.jsx'; 
import Logout from './Auth/Logout.jsx'; 

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
      <Route exact path="/" render={
        () => {
          return (<Login />); 
        }
      }/>       
      </Router> 
    )
  }
}

export default App;