import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignup } from '../../../actions/signupUsersActions.js';
// import './index.css'; 

class SignupBusiness extends Component {
  constructor() {
    super();
    this.state = {
      businessName: '',
      address: '',
      constactName: '',
      phone: '',
      email: '', 
      password: '', 
      foodCategory: '', 
      type: 1,
      agree: false,
    }
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSignUpClick = async (e) => {
    e.preventDefault();
    const {businessName, address, contactName, phone, email, password, foodCategory, type} = this.state;
    const body = {
      businessName,
      address,
      contactName, 
      phone,
      email,
      password,
      foodCategory, 
      type
    };
    try {
    // const { userData } = await this.props.userSignup(body);
    const data = await axios.post('http://localhost:3000/api/auth/signup', body);
    data ? this.props.history.push('/dashboard') : alert('Request failed try again');
    this.props.userSignup({
      businessName: data.data.businessName,
      address: data.data.address,
      contactName: data.data.constactName, 
      phone: data.data.phone,
      email: data.data.email,
      foodCategory: data.data.foodCategory, 
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
        <form onSubmit={this.handleSignUpClick.bind(this)}>
          <input name='businessName' placeholder='business name' onChange={this.handleForm.bind(this)}/>
          <br/>
          <input name='address' placeholder='address' onChange={this.handleForm.bind(this)}/>
          <br/>
          <input name='contactName' placeholder='contact name' onChange={this.handleForm.bind(this)}/>
          <br/>
          <input name='phone' placeholder='phone' onChange={this.handleForm.bind(this)}/>
          <br/>
          <input name='email' placeholder='email' onChange={this.handleForm.bind(this)}/>
          <br/>
          <input name='password' type='password' placeholder='password' onChange={this.handleForm.bind(this)}/>
          <br/><br/>
          <div className="typeOfCuisine">
          <select>
            <option value='mexican'>Mexican</option>
            <option value='indian'>Indian</option>
            <option value='chinnese'>Chinese</option>
          </select>
          </div>
          <label>
            <input type="checkBox" name="agree" onChange={this.agreeToTerms.bind(this)}/>
            I agree to the terms and conditions
          </label>
          <br/><br/>
          <input type='submit' value='signup'/>
        </form>
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
export default connect(mapStateToProps, matchDispatchToProps)(SignupBusiness);
