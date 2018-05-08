import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Feed from './Feed/index.jsx';
import Login from './Auth/Login.jsx';
import Signup from './Auth/Signup.jsx'; 
import Logout from './Auth/Logout.jsx'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '', 
      isLoggedIn: false
    }
  }

  render() {
    return (
      <Router>
      <div>
      <Route exact path="/" exact strict render={
        () => (
          this.state.isLoggedIn ? 
          (<Feed />) : 
        (<Redirect to="/" />))
      }/>      
      <Route exact path="/signup" exact strict render={
        () => {
          return (<Signup />); 
        }
      }/>  
      </div>
      </Router> 
    )
  }
}

export default App;