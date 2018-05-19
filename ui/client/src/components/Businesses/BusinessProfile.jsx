import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';
import Menu from '../Menu/Menu.jsx';
import Logout from '../Auth/Logout.jsx';
import Payment from './Payment.jsx'; 
import Reviews from '../Reviews/Reviews.jsx';

import fontawesome from '@fortawesome/fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import faDollarSign from '@fortawesome/fontawesome-free-solid/faDollarSign'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'

fontawesome.library.add(faStar)
fontawesome.library.add(faDollarSign)


import './Business.scss';

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
          <div className='rating'>
            {
              Array(Math.ceil(this.state.rating) || 1).fill(1).map((dollar, i) => {
                console.log(dollar);
                return (
                  <div key={`${i} star`}><i className="fas fa-star starIcon"></i></div>
                )
              }) 
            }
          </div>
        </div>
        <div className='profileName'>
          <div className='businessNameProfile'>
            {this.state.businessname}
          </div>
          <div className='subText'>
            <div className='category'>{this.state.foodcategory}</div>
            <div className='address'>{this.state.address}</div>
          </div>
          <div className='subText2'>
            <div className='phone'>{!!this.state.phone ? (`${this.state.phone.slice(0,3)} ${this.state.phone.slice(3,6)} ${this.state.phone.slice(6,10)}` ) : 'phone'}</div>
            <div className='price'>
              {
               Array(Math.ceil(this.state.price) || 1).fill(1).map((dollar, i) => {
                 console.log(dollar);
                 return (
                <div key={`${i} dollar`}><i className="fas fa-dollar-sign priceIcon"></i></div>
                 )
               }) 
              }
              
            </div>
          </div>
        </div>
        <div className='profileHeader'>
        <h1>menu</h1>
        </div>
        <div className='menu'>
          <Menu />
        </div>
        <div>
          <Payment /> 
        </div>
        <div className='profileHeader'>
        <h1>open pools</h1>
        </div>
        <div className='openPools'>
          These are the open pools.
        </div>
        <div className='profileHeader'>
        <h1>reviews</h1>
        </div>
        <div className='reviews'>
          <Reviews />
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
