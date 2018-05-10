import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { usersInfo } from '../../actions/userLoginAction.js'; 

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
    localStorage.setItem('email', data.email)
    localStorage.setItem('id', data.id)
    localStorage.setItem('token', data.token.accessToken)
    this.props.usersInfo({
      id: data.id, 
      name: data.name, 
      email: data.email, 
      type: data.type, 
      phone: data.phone
    });
    data ? this.props.history.push('/home') : this.props.history.push('/login');
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
    usersLogin: state.userLogin
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  usersInfo: usersInfo
  }, dispatch);
};
export default connect(mapStateToProps, matchDispatchToProps)(Login);