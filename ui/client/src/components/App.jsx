import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
      <div>
        <div>
          <Login />
          </div>
        <div>
          <Signup />
          </div>
          <div>
          <Logout />
          </div>
      </div>
    )
  }
}

export default App;