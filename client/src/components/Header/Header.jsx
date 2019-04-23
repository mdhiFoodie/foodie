import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LoggedOutHeader from './LoggedOutHeader.jsx';
import UserHeader from './UserHeader.jsx';
import BusinessHeader from './BusinessHeader.jsx';
import DeliveryHeader from './DeliveryHeader.jsx';

const storage = localStorage.storage && JSON.parse(localStorage.storage);

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const type = localStorage.storage
      ? JSON.parse(localStorage.storage).type
      : 'loggedout';
    return (
      <div>
        {this.props.getUsersInformation.usersInfo.type === '0' ||
        type === '0' ? (
          <UserHeader />
        ) : this.props.getUsersInformation.usersInfo.type === '1' ||
          type === '1' ? (
          <BusinessHeader history={this.props.history} />
        ) : this.props.getUsersInformation.usersInfo.type === '2' ||
          type === '2' ? (
          <DeliveryHeader />
        ) : type === 'loggedout' ? (
          <LoggedOutHeader />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //User information name, email, id, phone etc when they login or signup
  getUsersInformation: state.getUsersInformation,
});
export default connect(mapStateToProps)(Header);
