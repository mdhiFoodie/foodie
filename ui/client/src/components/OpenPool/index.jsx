import React, { Component } from 'react';
import axios from 'axios';

class OpenPools extends Component {
  constructor() {
    super();

    this.state = {
      discount: ['no discount yet', 'free delivery', .05, .1, .15]
    }
    this.calcDiscount = this.calcDiscount.bind(this);
  }

  componentDidMount () {
    this.setState({
      openPools: 'pools'
    })

    this.grabPools();
  }

  calcDiscount(count) {
    if(count < 5) {
      return this.state.discount[0];
    }
    if(count < 10) {
      return this.state.discount[1];
    }
    if(count < 15) {
      return this.state.discount[2];
    }
    if(count < 20) {
      return this.state.discount[3];
    }
    if(count > 20) {
      return this.state.discount[4];
    }
  }

  async grabPools () {
    const response = await axios.get(`http://localhost:3000/api/pool/grabAllPools`)
    const pools = Array.from(response.data).map((pool) => 
      <div key={pool.bizid + pool.userId}>
        <div>{pool.bizName}</div>
        <div>count: {pool.count}</div>
        <div>discount: {this.calcDiscount(pool.count)}</div>
        <div>pool closes at: {pool.eta}</div>
        <div>food will be delvered at: {pool.timer}</div>
      </div>
    )
    this.setState({
      openPools: pools
    });
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