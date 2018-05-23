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
      const storage =  JSON.parse(localStorage.storage); 
      const businessId = storage.id;
      e.preventDefault(); 
      const { name, email, password, phone, type } = this.state; 
      const body = {
        name, 
        email, 
        password, 
        phone, 
        type,
        businessId
      };
      try {
        const { data } = await axios.post('http://localhost:3000/api/business/saveDeliveryUser', body)
        data ? this.props.history.push('/dashboard') : alert('Something went wrong with your request try again');
      }
      catch(err) {
        console.log('Error saving driver\'s data', err ); 
      }
    }

  render() {
    //Information from the business 
    const { usersInfo } = this.props.getUsersInformation;
    return(
      <div className='addDriverContainer'>

      <div className='profileHeader'>
      <h1>Add a delivery person</h1>
      </div>

      <div className='addDriverInfo'>
      <form onSubmit={this.handleSignupForDriver}>
        <input name='name' placeholder='name' onChange={this.onChange.bind(this)}/>
        <input name='email' placeholder='email' onChange={this.onChange.bind(this)} />
        <input name='password' type='password' placeholder='password' onChange={this.onChange.bind(this)}/>
        <input name='phone' placeholder='phone' onChange={this.onChange.bind(this)} />
        <input className='addDBtn' type='submit' />
      </form>
      </div>

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
