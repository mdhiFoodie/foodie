import React, { Component } from 'react';
import { getUserInfo } from '../../actions/usersInformationAction.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
    this.props.getUserInfo({});
    this.props.history.push('/login');
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserInfo: getUserInfo
  }, dispatch);
};
export default connect(null, matchDispatchToProps)(Logout);