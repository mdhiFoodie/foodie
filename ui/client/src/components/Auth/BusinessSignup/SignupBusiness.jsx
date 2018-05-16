import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignup } from '../../../actions/signupUsersActions.js';
import { getUserInfo } from '../../../actions/usersInformationAction.js';
// import { Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './BusinessSignup.scss';

const GOOGLE = process.env.GOOGLE

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
      latitude: 0,
      longitude: 0
    }
  }

  handleForm(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleFoodCategory(e) {
    this.setState({
      foodcategory: e
    }); 
    console.log('HERE I AM HERE => ', e)
  }

  handleSignUpClick = async (e) => {
    e.preventDefault();
    const locations = this.state.address;
    const geoCode = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: locations,
                    key: GOOGLE
                }
            }); 
            this.setState({
              latitude: geoCode.data.results[0].geometry.location.lat,
              longitude: geoCode.data.results[0].geometry.location.lng
            })
    const {businessname, address, contactname, phone, email, password, foodcategory, type, latitude, longitude} = this.state;
    const body = {
      businessname,
      address,
      contactname, 
      phone,
      email,
      password,
      foodcategory, 
      type,
      latitude,
      longitude
    };
    try {
    const { data } = await axios.post('http://localhost:3000/api/auth/signup', body);

    localStorage.setItem('storage', JSON.stringify({
      id: data.id, 
      name: data.businessname, 
      email: data.email, 
      type: data.type, 
      phone: data.phone,
      token: data.token.accessToken
    }));
      this.props.getUserInfo({
        id: data.id, 
        businessname: data.businessname,
        address: data.address,
        contactname: data.contactname, 
        phone: data.phone,
        email: data.email,
        foodcategory: data.foodcategory, 
        type: data.type
      });
    data ? this.props.history.push('/dashboard') : alert('Request failed try again');
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

          <select id='btnCategory' onSelect={this.value} >
            <option value='mexican'>Mexican</option>
            <option value='indian'>Indian</option>
            <option value='chinese'>Chinese</option>
          </select>

            {/* <ButtonToolbar>
            <DropdownButton title="Type of Cuisine" id="dropdown-size-medium">
              <MenuItem onSelect={this.handleFoodCategory.bind(this)} eventKey="1">African</MenuItem>
              <MenuItem eventKey="2">American</MenuItem>
              <MenuItem eventKey="3">Bakery</MenuItem>
              <MenuItem eventKey="4">Burger</MenuItem>
              <MenuItem eventKey="5">Caribbean</MenuItem>
              <MenuItem eventKey="6">Chinese</MenuItem>
              <MenuItem eventKey="5">Halala</MenuItem>
              <MenuItem eventKey="6">Indian</MenuItem>
            </DropdownButton>
          </ButtonToolbar> */}

          <br/><br/>
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