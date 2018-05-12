import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

class Protected extends Component {
  componentDidMount() {
    try {
      const { exp } = jwtDecode(localStorage.token);
      if (exp < Math.floor(Date.now() / 1000) && localStorage.type === '0') {
        this.props.history.push('/home');
      } else if (exp < Math.floor(Date.now() / 1000) && localStorage.type === '1') {
        this.props.history.push('/dashboard');
      } else if (exp < Math.floor(Date.now() / 1000) && localStorage.type === '2') {
        this.props.history.push('/deliveryProfile');
      }
    } catch (e) {
      console.log('error in Protected ', e);
      this.props.history.push('/');
    }
  }

  render() {

    const { component: Component } = this.props;
    console.log('COMPONENT', ...this.props)
    return (
      <Component {...this.props} />
    );
  }
}

export default Protected;