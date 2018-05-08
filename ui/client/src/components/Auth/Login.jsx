import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
    console.log(this.state);
  }

  handleLoginClick = async (e) => {
    e.preventDefault();
    console.log('HELLO')
    const {email, password} = this.state;
    const body = {
      email, password
    };
    try {
    const { data } = await axios.post('http://localhost:3000/api/auth/login', body);
    localStorage.setItem('email', data.email)
    localStorage.setItem('id', data.id)
    localStorage.setItem('token', data.token.accessToken)
    console.log('data.data', data)
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginClick.bind(this)}>
          <input name='email' placeholder='email' onChange={this.handleForm.bind(this)}/>
          <input name='password' type='password' placeholder='password' onChange={this.handleForm.bind(this)}/>
          <input type='submit' value='login'/>
        </form>
      </div> 
    )
  }
}

export default Login;