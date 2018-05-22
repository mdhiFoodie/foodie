import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';
import AddDelivery from './AddDelivery.jsx'; 
import Logout from '../Auth/Logout.jsx';
import EachDriver from './EachDriver.jsx';
import EachOrder from './EachOrder.jsx';

import fontawesome from '@fortawesome/fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
fontawesome.library.add(faStar);
fontawesome.library.add(faPlus)

import io from 'socket.io-client';


import './Business.scss';

class BusinessDashboard extends Component {
  constructor() {
    super();
    this.state = {
      myDeliveryTeam: [],
      bizId: JSON.parse(localStorage.storage).id, 
      orders: null
    }
    this.socket = io('http://localhost:4000'); 
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
  
  async currentOrders() {
    try {
      const response = await axios.get(`http://localhost:3000/api/cart/grabBizOrders/${this.state.bizId}`);
      console.log('Hellooooooo', response)
      //gonna need specific pool order to group them
      for (var key in response.data) {
        const orderToRender = [];
        let foodItems = JSON.parse(response.data[key])
        for (var item in foodItems) {
          let subtotal = 0; 
          let price = JSON.parse(foodItems[item])[0];
          let quantity = JSON.parse(foodItems[item])[1];
          subtotal += quantity * price; 
          orderToRender.push({quantity, item, price, subtotal});
        }
        this.setState({
          orders: orderToRender
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getDeliveryTeam();
    this.currentOrders();
  }
  
  render() {
    const storage = JSON.parse(localStorage.storage);
    return(
      <div className='dashboard'>
        <div className='profileHeader'>
        <h1>{storage.name}</h1>
      </div>

        <div className='profileHeader'>
            <h1>orders</h1>
        </div>

      <div className='dashboardOrders'>
        <button onClick={this.currentOrders}>get Orders</button>
        {
          this.state.orders && this.state.orders.length ? this.state.orders.map(item => 
            <EachOrder order={item} /> 
          )
          :
          <div/>
          }
        </div>

        <div className='profileHeader'>
        <h1>delivery Team</h1>
        </div>

        <div className='dashboarDeliveryTeam'>
        <button className='addDriver' onClick={this.addDeliveryPerson}><i className="fas fa-plus icon"></i></button> 
          {
            this.state.myDeliveryTeam.length ? this.state.myDeliveryTeam.map(driver => 
              <div className='driverColumn'>
              <EachDriver driver={driver} key={driver.email}/>
              </div>
            )
            :
            null
          }
        </div>
        
        <div >
        <div className='profileHeader'>
        <h1>statistics</h1>
        </div>
        <div className='statscontainer'>
          
        </div>
        </div>
        <div >
        <Logout history={this.props.history}/>
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
export default connect(mapStateToProps, null)(BusinessDashboard);