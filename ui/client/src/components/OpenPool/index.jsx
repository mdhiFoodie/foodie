import React, { Component } from 'react';
import axios from 'axios';

class OpenPools extends Component {
  constructor() {
    super();

    this.state = {
      discount: ['free delivery', .05, .1, .15]
    }
  }

  componentDidMount () {
    this.setState({
      openPools: 'pools'
    })

    this.grabPools();
  }

  async grabPools () {
    const response = await axios.get(`http://localhost:3000/api/pool/grabAllPools`)
    const pools = Array.from(response.data).map((pool) => 
      <div>
        <div>{pool.bizName}</div>
        <div>count: {pool.count}</div>
        <div>discount: {this.state.discount[0]}</div>
        <div>pool closes at: {pool.eta}</div>
        <div>food will be delvered at: {pool.timer}</div>
      </div>
    )
    this.setState({
      openPools: pools
    });

    await console.log(response.data);
  }

  render() {
    return(
      <div>
        Open Pools
       {this.state.openPools}
      </div>
    )
  }
}

export default OpenPools;