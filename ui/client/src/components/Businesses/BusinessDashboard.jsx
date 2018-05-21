import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';
import AddDelivery from './AddDelivery.jsx'; 
import Logout from '../Auth/Logout.jsx';
import EachDriver from './EachDriver.jsx';

import './Business.scss';

class BusinessDashboard extends Component {
  constructor() {
    super();
    this.state = {
      myDeliveryTeam: [],
      //set bizid on component did mount
      bizId: JSON.parse(localStorage.storage).id, 
      // bizId: JSON.pa,
      orders: null
    }
    this.addDeliveryPerson = this.addDeliveryPerson.bind(this);
    this.currentOrders = this.currentOrders.bind(this);
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
    this.currentOrders();
  }
  
  async currentOrders() {
    try {
      const response = await axios.get(`http://localhost:3000/api/cart/grabBizOrders/${this.state.bizId}`);
      console.log('THIS IS RESPONSE', response)
      //gonna need specific pool order to group them
      for (var key in response.data) {
        const orderToRender = [];
        let foodItems = JSON.parse(response.data[key])
        for (var item in foodItems) {
          let price = JSON.parse(foodItems[item])[0];
          let quantity = JSON.parse(foodItems[item])[1];
          orderToRender.push(<div key={item}><div>{quantity}</div><div>{item}</div> <div>{price}</div></div>);        }
        this.setState({
          orders: orderToRender
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  render() {
    const storage = JSON.parse(localStorage.storage);
    return(
      <div className='dashboard'>
        <div className='profileHeader'>
        <h1>{storage.name}</h1>
      </div>
      <div className='profileHeader'>
          <h3>Orders</h3>
        {this.state.orders}
        {/* <button onClick={this.currentOrders}>Get Orders</button> */}
        </div>
        <div>
        <div className='profileHeader'>
        <h3>delivery Team</h3>
        
          {
            this.state.myDeliveryTeam.length ? this.state.myDeliveryTeam.map(driver => 
              <div className='driverColumn'>
              {/* <div className='addDriver' onClick={this.addDeliveryPerson}>Add a driver</div> */}
              <EachDriver driver={driver} key={driver.email}/>
              </div>
            )
            :
            null
          }
        </div>
        <br/><br/>
        </div>
        <div className='profileHeader'>
        <h3>Statistics</h3>
        <div className='statscontainer'>
        </div>
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