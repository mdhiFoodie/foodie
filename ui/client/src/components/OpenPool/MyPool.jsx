import React, { Component } from 'react';
import Chat from '../Chat/index.jsx';
import axios from 'axios';

class MyPool extends Component {
  constructor() {
    super();
    this.state = {
      poolIdOfUser: null
    }
  }

  async componentDidMount () {
    try {
      const response = await axios.get(`http://localhost:3000/api/pool/grabUsersPool/${JSON.parse(localStorage.storage).id}`)
      this.setState({
        poolIdOfUser: response.data
      });
      console.log('this is the state poool id of user', this.state.poolIdOfUser)
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>{this.state.poolIdOfUser !== null ?
        <div>
          <Chat poolId={this.state.poolIdOfUser}/>
        </div>
        :
        <div> Hey you should join a pool cause youre not in one right now...</div>
      }
      </div>
    );
  }
}

export default MyPool;