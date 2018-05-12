import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';
import AddDelivery from './AddDelivery.jsx'; 
import Logout from '../Auth/Logout.jsx';

import './Business.scss';

class BusinessDashboard extends Component {
  constructor() {
    super();
    this.state = {
      deliveryTeam: [] 
    }
    this.addDeliveryPerson = this.addDeliveryPerson.bind(this);
  }

  addDeliveryPerson() {
    this.props.history.push('/AddDelivery')
  }

  getDeliveryTeam = async () => {
    try {
    const data = await axios.get('http://localhost:3000/api/business/getDeliveryTeam');
    console.log('delivery team in business dashboard', data)
    } 
    catch(err) {
      console.log('Error getting the delivery team', err)
    }
  }; 

  // componentDidMount() {
  //getDeliveryTeam from that business 
  // }
  
  render() {
    const { usersInfo } = this.props.getUsersInformation; 
    console.log('dash', usersInfo)
    return(
      <div className='dashboard'>
        <div className='businessName'>
        <h1>{usersInfo.businessname}</h1>
        </div>
        <div>
        <h3>Orders</h3>
        </div>
        <div>
        <h3>delivery Team</h3>

        <button onClick={this.addDeliveryPerson}>Add a driver</button>
        </div>
        <div>
        <h3>Statistics</h3>
        </div>
        <Logout history={this.props.history}/>
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
export default connect(mapStateToProps, null)(BusinessDashboard);
