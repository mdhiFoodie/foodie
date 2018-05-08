import React, { Component } from 'react';

export default class Logout extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}