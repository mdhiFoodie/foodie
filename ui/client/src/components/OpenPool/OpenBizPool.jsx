// import React, { Component } from 'react';
// import Chat from '../Chat/index.jsx';
// import axios from 'axios';

// class MyPool extends Component {
//   constructor() {
//     super();
//   }

//   async componentDidMount () {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/pool/grabUsersPool/${JSON.parse(localStorage.storage).id}`)
//       this.setState({
//         poolIdOfUser: response.data
//       });
//       console.log('this is the state poool id of user', this.state)
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default MyPool;