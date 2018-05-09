import React, { Component } from 'react';
import axios from 'axios';
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
      typeOfCuisine: '', 
      type: 'business',
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
    const {businessName, address, contactName, phone, email, password, typeOfCuisine} = this.state;
    const body = {
      businessName,
      address,
      contactName, 
      phone,
      email,
      password,
      typeOfCuisine
    };
    try {
    const data = await axios.post('http://localhost:3000/api/auth/signup', body);
    // localStorage.setItem('email', data.email);
    // localStorage.setItem('id', data.id);
    // localStorage.setItem('name', data.name);
    data ? this.props.history.push('/home') : alert('Request failed try again');
    console.log('localStorage =>', data)
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
            <option value='mexican'>Maxican</option>
            <option value='indian'>Indian</option>
            <option value='chinnese'>Chinnese</option>
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

export default SignupBusiness;