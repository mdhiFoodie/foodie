import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignup } from '../../actions/signupUsersActions.js';
import { getUserInfo } from '../../actions/usersInformationAction.js';

const API_SERVER = process.env.API_SERVER; 

class SignupUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      phone: '',
      type: 0,
      agree: false,
    };
  }

  handleForm(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSignUpClick = async e => {
    e.preventDefault();
    const { name, phone, email, password, type } = this.state;
    const body = {
      name,
      phone,
      email,
      password,
      type,
    };

    try {
      const { data } = await axios.post(
        `http://localhost:${API_SERVER}/api/auth/signup`,
        body
      );
      localStorage.setItem(
        'storage',
        JSON.stringify({
          id: data.id,
          name: data.name,
          email: data.email,
          type: data.type,
          phone: data.phone,
          token: data.token.accessToken,
        })
      );
      this.props.getUserInfo({
        id: data.id,
        name: data.name,
        phone: data.phone,
        email: data.email,
        type: data.type,
      });

      data
        ? this.props.history.push('/home')
        : alert('Request failed try again');
    } catch (err) {
      console.log(err);
    }
  };

  agreeToTerms() {
    this.setState(
      {
        agree: !this.state.agree,
      },
      () => {
        alert('I agree with the terms and conditions: ', this.state.agree);
      }
    );
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="formContainer">
          <img className="logo" src="/foodie-logo2.png" />
          <form
            className="formStyle"
            onSubmit={this.handleSignUpClick.bind(this)}
          >
            <input
              name="name"
              placeholder="name"
              onChange={this.handleForm.bind(this)}
            />
            <input
              name="phone"
              placeholder="phone"
              onChange={this.handleForm.bind(this)}
            />
            <input
              name="email"
              placeholder="email"
              onChange={this.handleForm.bind(this)}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleForm.bind(this)}
            />

            <input
              className="checkTerms"
              type="checkBox"
              name="agree"
              onChange={this.agreeToTerms.bind(this)}
            />
            <label>I agree to the terms and conditions</label>
            <input className="signupButton" type="submit" value="signup" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //Still working in making the post request as an action for signup
  usersData: state.usersData,
  // getUsersInformation gets the users information name, email, id etc
  getUsersInformation: state.getUsersInformatio,
});
const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUserInfo: getUserInfo,
      userSignup: userSignup,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SignupUser);
