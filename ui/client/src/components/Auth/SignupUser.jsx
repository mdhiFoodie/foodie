import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { userSignup } from '../../actions/signupUsersActions';

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
    }
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSignUpClick = async (e) => {
    e.preventDefault();

    const {name, phone, email, password, type} = this.state;
    const body = {
      name,
      phone,
      email, 
      password, 
      type
    };
    try {
    const { userData } = await this.props.userSignup(body);
    userData ? this.props.history.push('/home') : alert('Request failed try again');
    console.log('localStorage from user signup =>', userData)
    }
    catch(err) {
      console.log(err);
    }
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
        </div> 
      </div> 
    )
  }
}

const mapStateToProps = state => ({
  //usersData is the key coming from our root reducers with the value of our reducer file
  data: state.usersData
})
export default connect(mapStateToProps, { userSignup })(SignupUser);