import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      type: 'user',
      email: '',
      password: '',
      name: '', 
      phone: '',
      businessName: '',
      address: '',
      contactName: '',
      agree: false,
    }
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
    console.log(this.state);
  }

  handleSignUpClick = async (e) => {
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

  changeSignUpView() {
    this.setState({
      type: this.state.type === 'user' ? 'business' : 'user',
    })
  }

  agreeToTerms() {
    this.setState ({
      agree: !this.state.agree
    }, () => {
      console.log('I agree with the terms and conditions: ', this.state.agree)
    })
  }

  render() {
    return (
      <div>
      {

        this.state.type === 'user' ?
        <div>
          <form onSubmit={this.handleSignUpClick.bind(this)}>
            <input name='name' placeholder='name' onChange={this.handleForm.bind(this)}/>
            <input name='phone' placeholder='phone' onChange={this.handleForm.bind(this)}/>
            <input name='email' placeholder='email' onChange={this.handleForm.bind(this)}/>
            <input name='password' type='password' placeholder='password' onChange={this.handleForm.bind(this)}/>
            <label>
              <input type="checkBox" name="agree" onChange={this.agreeToTerms.bind(this)}/>
              I agree to the terms and conditions
            </label>
            <input type='submit' value='signup'/>
          </form>
          <div>
            Are you a business? <a href='#' onClick={this.changeSignUpView.bind(this)}>Sign up</a> here.
          </div>  
        </div> 
        :
        <div>
          <form onSubmit={this.handleSignUpClick.bind(this)}>
            <input name='businessName' placeholder='business name' onChange={this.handleForm.bind(this)}/>
            <input name='address' placeholder='address' onChange={this.handleForm.bind(this)}/>
            <input name='contactName' placeholder='contact name' onChange={this.handleForm.bind(this)}/>
            <input name='email' placeholder='email' onChange={this.handleForm.bind(this)}/>
            <input name='phone' placeholder='phone' onChange={this.handleForm.bind(this)}/>
            <input name='password' type='password' placeholder='password' onChange={this.handleForm.bind(this)}/>
            <label>
              <input type="checkBox" name="agree" onChange={this.agreeToTerms.bind(this)}/>
              I agree to the terms and conditions
            </label>
            <input type='submit' value='signup'/>
          </form>
          <div>
            Are you a user? <a href='#' onClick={this.changeSignUpView.bind(this)}>Sign up</a> here.
          </div> 
        </div> 
      }
      </div> 
    )
  }
}

export default Signup;