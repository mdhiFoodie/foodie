import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

class Protected extends Component {
  componentDidMount() {
    try {
      const local = JSON.parse(localStorage.storage);
      const { exp } = jwtDecode(local.token);
      if (exp < Math.floor(Date.now() / 1000) && local.type === '0') {
        this.props.history.push('/home');
      } else if (exp < Math.floor(Date.now() / 1000) && local.type === '1') {
        this.props.history.push('/dashboard');
      } else if (exp < Math.floor(Date.now() / 1000) && local.type === '2') {
        this.props.history.push('/deliveryProfile');
      }
    } catch (e) {
      console.log('error in Protected ', e);
      this.props.history.push('/');
    }
  }

  render() {
    const { component: Component } = this.props;
    return (
      <Component {...this.props} />
    );
  }
}

export default Protected;