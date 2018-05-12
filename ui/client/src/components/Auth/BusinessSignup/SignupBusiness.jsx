import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignup } from '../../../actions/signupUsersActions.js';
import { getUserInfo } from '../../../actions/usersInformationAction.js';
// import './index.css'; 

class SignupBusiness extends Component {
  constructor() {
    super();
    this.state = {
      businessname: '',
      address: '',
      contactname: '',
      phone: '',
      email: '', 
      password: '', 
      foodcategory: '', 
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
    const {businessname, address, contactname, phone, email, password, foodcategory, type} = this.state;
    const body = {
      businessname,
      address,
      contactname, 
      phone,
      email,
      password,
      foodcategory, 
      type
    };
    try {
    const data = await axios.post('http://localhost:3000/api/auth/signup', body);
    data ? this.props.history.push('/dashboard') : alert('Request failed try again');
    this.props.getUserInfo({
      id: data.data.id, 
      businessname: data.data.businessname,
      address: data.data.address,
      contactname: data.data.contactname, 
      phone: data.data.phone,
      email: data.data.email,
      foodcategory: data.data.foodcategory, 
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
          <input name='businessname' placeholder='business name' onChange={this.handleForm.bind(this)}/>
          <br/>
          <input name='address' placeholder='address' onChange={this.handleForm.bind(this)}/>
          <br/>
          <input name='contactname' placeholder='contact name' onChange={this.handleForm.bind(this)}/>
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
  //Still working in making the post request as an action for signup 
  usersData: state.usersData,
  // getUsersInformation gets the users information name, email, id etc 
  getUsersInformation: state.getUsersInformation
})
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserInfo: getUserInfo,   
    userSignup: userSignup
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(SignupBusiness);
