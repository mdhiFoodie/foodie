import React, { Component } from 'react';


export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}