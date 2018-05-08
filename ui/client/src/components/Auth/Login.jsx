import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.onSignup = this.onSignup.bind(this); 
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleLoginClick = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const body = {
      email, password
    };
    try {
    const { data } = await axios.post('http://localhost:3000/api/auth/login', body);
    localStorage.setItem('email', data.email)
    localStorage.setItem('id', data.id)
    localStorage.setItem('token', data.token.accessToken)
    data ? this.props.history.push('/homepage') : this.props.history.push('/login');
    console.log('localStorage =>', data)
    }
    catch(err) {
      console.log(err);
    }
  }

  onSignup() {
    this.props.history.push('/signup'); 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginClick.bind(this)}>
          <input name='email' placeholder='email' onChange={this.handleForm.bind(this)}/>
          <input name='password' type='password' placeholder='password' onChange={this.handleForm.bind(this)}/>
          <input type='submit' value='login'/>
        </form>
        <button onClick={this.onSignup}>Signup</button>
      </div> 
    )
  }
}

export default Login;