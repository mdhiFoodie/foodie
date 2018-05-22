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

import './Business.scss';

class BusinessDashboard extends Component {
  constructor() {
    super();
    this.state = {
      myDeliveryTeam: [],
      bizId: JSON.parse(localStorage.storage).id, 
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
  
  async currentOrders() {
    try {
      const {data} = await axios.get(`http://localhost:3000/api/cart/grabBizOrders/${this.state.bizId}`);
      //gonna need specific pool order to group them
      console.log('Response to get orders for each business', data, 'TYPEOF' ,typeof data);
// "{"Bean & Cheese Cheese Bread":"[\"4.95\",1]","Green Chile Cheese Bread":"[\"7.65\",1]"}
      for (var key in data) {
        const orderToRender = [];
        let foodItems = JSON.parse(data[key])
        console.log('foodITEMS ', foodItems);
        for (var item in foodItems) {

          let price = JSON.parse(foodItems[item])[0];
          //FOR EACH PRICE ADD THEM AND RENDER TOTAL FOR THE ORDER 
          let quantity = JSON.parse(foodItems[item])[1];

          orderToRender.push({quantity, item, price});
        }
        // <div key={item}><div>{quantity}</div><div>{item}</div> <div>{price}</div></div>
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
    console.log('RENDER');
    console.log('RENDER', this.state.orders);
    return(
      <div className='dashboard'>
        <div className='profileHeader'>
        <h1>{storage.name}</h1>
      </div>

        <div className='profileHeader'>
            <h1>orders</h1>
        </div>

      <div className='dashboardOrders'>
        <button onClick={this.currentOrders}>Get Orders</button>
        {
          this.state.orders && this.state.orders.length ? this.state.orders.map(item => 
            <EachOrder order={item} key={item[0]}/> 
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