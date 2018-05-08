import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Feed from './Feed/index.jsx';
import Login from './Auth/Login.jsx';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default App;