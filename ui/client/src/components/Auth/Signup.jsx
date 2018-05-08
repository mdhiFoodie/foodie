import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '', 
      phone: ''
    }
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
    console.log(this.state);
  }

  handleLoginClick = async (e) => {
    e.preventDefault();

    const {name, phone, email, password} = this.state;
    const body = {
      name,
      phone,
      email, 
      password
    };
    try {
    const verifyLogin = await axios.post('http://localhost:3000/api/auth/signup', body);
    }
    catch(err) {
      console.log(err);
    }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginClick.bind(this)}>
        <input name='name' placeholder='name' onChange={this.handleForm.bind(this)}/>
        <input name='phone' placeholder='phone' onChange={this.handleForm.bind(this)}/>
          <input name='email' placeholder='email' onChange={this.handleForm.bind(this)}/>
          <input name='password' type='password' placeholder='password' onChange={this.handleForm.bind(this)}/>
          <input type='submit' value='login'/>
        </form>
      </div> 
    )
  }
}

export default Signup;