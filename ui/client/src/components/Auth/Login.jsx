import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getUserInfo } from '../../actions/usersInformationAction.js'; 

import './Auth.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.onSignupUser = this.onSignupUser.bind(this);
    this.onSignupBusiness = this.onSignupBusiness.bind(this); 
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleLoginClick = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const body = {
      email, 
      password
    };
    try {
    const { data } = await axios.post('http://localhost:3000/api/auth/login', body);

    localStorage.setItem('storage', JSON.stringify({
      id: data.id, 
      name: data.name,
      email: data.email, 
      type: data.type, 
      phone: data.phone,
      token: data.token.accessToken
    }));
    console.log('HERE TYPE', typeof data.type)
    this.props.getUserInfo({
      id: data.id, 
      name: data.name, 
      email: data.email, 
      type: data.type, 
      phone: data.phone
    });
    if (data.type === '0') {
      this.props.history.push('/home')
      console.log('HERE USER')
    } else if (data.type === '1') {
      console.log('HERE BUSINESS')
      this.props.history.push('/dashboard')
    } else if (data.type === '2') {
      this.props.history.push('/delivery')
    } else {
      this.props.history.push('/login')
    }
    }
    catch(err) {
      console.log(err);
    }
  }

  onSignupUser() {
    this.props.history.push('/signupUser'); 
  }

  onSignupBusiness() {
    this.props.history.push('/signupBusiness'); 
  }

  render() {
    return (
      <div className='loginContainer'>
        <img className='logo' src='#'/>
        <div className='formContainer'>
        <form className='formStyle' onSubmit={this.handleLoginClick.bind(this)}>
          <input name='email' placeholder='email' onChange={this.handleForm.bind(this)}/>
          <input name='password' type='password' placeholder='password' onChange={this.handleForm.bind(this)}/>
          <input className='loginButton' type='submit' value='login'/>
        </form>
        <div>
          <a className='signupLink' onClick={this.onSignupUser}>signup</a>
        </div> 
        
        <div className='loginFooter'>
            Are you a business <a onClick={this.onSignupBusiness}>sign up</a> here.
        </div> 
        </div>
        
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  //usersData is the key coming from our root reducers with the value of our reducer file
  // Saves in the store the users information as soon as they login name, email, phone etc 
  usersInformationReducer: state.usersInformationReducer
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserInfo: getUserInfo
  }, dispatch);
};
export default connect(mapStateToProps, matchDispatchToProps)(Login);