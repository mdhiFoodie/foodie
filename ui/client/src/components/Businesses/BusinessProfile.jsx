import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';
import Menu from '../Menu/Menu.jsx';
import Logout from '../Auth/Logout.jsx';
import Payment from './Payment.jsx'; 

class BusinessProfile extends Component {
  constructor() {
    super();

    this.state = {
      // id, businesspicture, coverpicture, address, email, type, rating, foodcategory, phone, latitude, longitude, price, businessname, contactname
    }
  }
  
  async componentWillMount() {
    const { data } = await axios.get(`http://localhost:3000/api/business/getInfoById/${location.pathname.split('/businessProfile/').join('').split('~')[1]}`)
    this.setState({
      id: data[0].id, 
      businesspicture: data[0].businesspicture, 
      coverpicture: data[0].coverpicture, 
      address: data[0].address, 
      email: data[0].email, 
      type: data[0].type, 
      rating: data[0].rating, 
      foodcategory: data[0].foodcategory, 
      phone: data[0].phone, 
      latitude: data[0].latitude, 
      longitude: data[0].longitude, 
      price: data[0].price, 
      businessname: data[0].businessname, 
      contactname: data[0].contactname

    })
    console.log('this is the state: ', data)
  }

  render() {
    return(
      <div className='profileContainer'>
        <div className='coverPhoto'>
          <img src={this.state.coverpicture} alt='cover photo'></img>
        </div>
        <div className='profilePhoto'>
          <img src={this.state.businesspicture} alt='http://placecorgi.com/200/200'></img>
          <div className='rating'>{this.state.rating} Stars</div>
        </div>
        <div className='profileName'>
          <Logout />
          {this.state.businessname}
          <div className='subText'>
            <div className='category'>{this.state.foodcategory}</div>
            <div className='address'>{this.state.address}</div>
          </div>
          <div className='subText2'>
            <div className='phone'>{this.state.phone}</div>
            <div className='price'>{this.state.price} $ </div>
          </div>
        </div>
        <h1>menu</h1>
        <div className='menu'>
          <Menu />
        </div>
        <div>
          <Payment /> 
        </div>
        <h1>open pools</h1>
        <div className='openPools'>
          These are the open pools.
        </div>
        <h1>reviews</h1>
        <div className='reviews'>
          These are the reviews for the business.
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
export default connect(mapStateToProps, null)(BusinessProfile);
