import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux';

class BusinessDashboard extends Component {
  constructor() {
    super();
  }
  
  render() {
    console.log('dash', this.props.getUsersInformation)
    return(
      <div>
        
        Business Dashboard 
        Option to add delivery person 
        How are we going to handle the delivery person? 
        The delivery user information will be saved on the users table 
        name 
        email 
        password 
        phone 
        type = deliveryUser (2)
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
