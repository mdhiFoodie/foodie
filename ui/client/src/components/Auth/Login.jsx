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
    if (data.type === '0') {
      console.log('I AM A USER')
      localStorage.setItem('email', data.email)
      localStorage.setItem('id', data.id)
      localStorage.setItem('type', data.type)
      localStorage.setItem('name', data.name)
      localStorage.setItem('phone', data.phone)
      localStorage.setItem('token', data.token.accessToken)
      this.props.history.push('/home')
      this.props.getUserInfo({
        id: data.id, 
        name: data.name, 
        email: data.email, 
        type: data.type, 
        phone: data.phone
      });

    } else if (data.type === '1') {
      console.log('I AM A BUSINESS')
      localStorage.setItem('email', data.email)
      localStorage.setItem('id', data.id)
      localStorage.setItem('type', data.type)
      localStorage.setItem('businessname', data.name)
      localStorage.setItem('phone', data.phone)
      localStorage.setItem('token', data.token.accessToken)
      this.props.history.push('/dashboard')
      this.props.getUserInfo({
        id: data.id, 
        businessname: data.name, 
        email: data.email, 
        type: data.type, 
        phone: data.phone
      });
      
    } else if (data.type === '2') {
      this.props.history.push('/delivery')
    } else {
      console.log('TYPE FROM ELSE', typeof data.type)
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
      <div>
        <form onSubmit={this.handleLoginClick.bind(this)}>
          <input name='email' placeholder='email' onChange={this.handleForm.bind(this)}/>
          <input name='password' type='password' placeholder='password' onChange={this.handleForm.bind(this)}/>
          <input type='submit' value='login'/>
        </form>
        <br/><br/>
        <div>
          New here? <button onClick={this.onSignupUser}>Register</button>
        </div> 
        <br/>
        <div>
            Become a restaurant partner <button onClick={this.onSignupBusiness}>Register</button>
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