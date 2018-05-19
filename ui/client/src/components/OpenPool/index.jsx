import React, { Component } from 'react';
import axios from 'axios';

class OpenPools extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  componentDidMount () {
    this.setState({
      openPools: 'pools'
    })

    this.grabPools();
  }

  async grabPools () {
    const pools = [];
    const response = await axios.get(`http://localhost:3000/api/pool/grabAllPools`)
    this.setState({
      pool: response.data
    });

    await console.log(response);
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