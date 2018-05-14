import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { usersInformation } from '../../actions/type';


class EachDriver extends Component {
  constructor() {
    super();
  }
/** 
 * Driver's information 
 * Driver's stars 
*/
  render() {
    const { usersInfo } = this.props.getUsersInformation;
    return(
      <div>
        {this.props.driver.name}
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
export default connect(mapStateToProps, null)(EachDriver);
