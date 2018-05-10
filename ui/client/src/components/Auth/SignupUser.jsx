import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignup } from '../../actions/signupUsersActions.js';

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
    // const { userData } = await this.props.userSignup(body);
    const data = await axios.post('http://localhost:3000/api/auth/signup', body);
    data ? this.props.history.push('/home') : alert('Request failed try again');
    this.props.userSignup({
      id: data.data.id,
      name: data.data.name,
      phone: data.data.phone,
      email: data.data.email,
      type: data.data.type
    });
    console.log('localStorage from user signup =>', data)
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
  usersData: state.usersData
})
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userSignup: userSignup
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(SignupUser);
