import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';
import AddDelivery from './AddDelivery.jsx'; 
import Logout from '../Auth/Logout.jsx';
import EachDriver from './Driver.jsx';

import './Business.scss';

class BusinessDashboard extends Component {
  constructor() {
    super();
    this.state = {
      myDeliveryTeam: []
    }
    this.addDeliveryPerson = this.addDeliveryPerson.bind(this);
  }

  addDeliveryPerson() {
    this.props.history.push('/AddDelivery')
  }

  getDeliveryTeam = async () => {
    const storage = JSON.parse(localStorage.storage); 
    const { id } = storage; 
    const body = {
      id_businesses: id
    }
    try {
    const { data } = await axios.post('http://localhost:3000/api/business/getDeliveryTeam', body);
    this.setState({
      myDeliveryTeam: data 
    })
    } 
    catch(err) {
      console.log('Error getting the delivery team', err)
    }
  }; 

  componentDidMount() {
    this.getDeliveryTeam();
  }
  
  render() {
    const storage = JSON.parse(localStorage.storage);
    return(
      <div className='dashboard'>
        <div className='businessName'>
        <h1>{storage.businessname}</h1>
        </div>
        <div>
        <h3>Orders</h3>
        </div>
        <div>
        <h3>delivery Team</h3>
        <div>
          <div className='driverTeam'>
            {
              this.state.myDeliveryTeam.length ? this.state.myDeliveryTeam.map(driver => 
                <EachDriver driver={driver} key={driver.email}/>
              )
              :
              null
            }
          </div>
        </div>

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
