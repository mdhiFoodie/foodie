import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';
import { usersInformation } from '../../actions/type';

class AddDelivery extends Component {
  constructor() {
    super();
    this.state = {
      name: '', 
      email: '',
      password: '',
      phone: '', 
      type: 2
    }
  }

    onChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }

    handleSignupForDriver = async(e) => {
      e.preventDefault(); 
      const { name, email, password, phone, type } = this.state; 
      const body = {
        name, 
        email, 
        password, 
        phone, 
        type
      };
      try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signup', body)
        data ? this.props.history.push('/dashboard') : alert('Something went wrong with your request try again');
      }
      catch(err) {
        console.log('Error saving driver\'s data', err ); 
      }
    }

  render() {
    //Information from the business 
    const { usersInfo } = this.props.getUsersInformation;
    console.log('usersInformation', usersInfo);
    return(
      <div>
      <h4>Add a delivery person</h4>
      <form onSubmit={this.handleSignupForDriver}>
        <input name='name' placeholder='name' onChange={this.onChange.bind(this)}/>
        <input name='email' placeholder='email' onChange={this.onChange.bind(this)} />
        <input name='password' type='password' placeholder='password' onChange={this.onChange.bind(this)}/>
        <input name='phone' placeholder='phone' onChange={this.onChange.bind(this)} />
        <input type='submit' />
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // usersData is the key coming from our root reducers with the value of our reducer file
  getUsersInformation: state.getUsersInformation
  
})

// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//   usersInfo: usersInfo
//   }, dispatch);
// };
// export default connect(mapStateToProps, matchDispatchToProps)(Login);
export default connect(mapStateToProps, null)(AddDelivery);
