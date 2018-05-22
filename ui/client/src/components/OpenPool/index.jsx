import React, { Component } from 'react';
import axios from 'axios';

import fontawesome from '@fortawesome/fontawesome';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
fontawesome.library.add(faCircle);

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
      openPools: []
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
    const { data } = await axios.get(`http://localhost:3000/api/pool/grabAllPools`);
    this.setState({
      openPools: data
    });
  }

  render() {
    const { openPools } = this.state; 
    console.log('openPools',this.state.openPools);
    return(
      <div>
      {
        openPools && openPools.length ? openPools.map(pool => 
          <div className='usersPool' key={pool.bizid + pool.userId}>
          <div>{`${pool.bizName}`}</div>
          <label>pool closes at</label><br/>
          <div>{`${pool.eta.split(':')[0]} AM`}</div>
          <label>discount</label><br/>
          <div>{`${this.calcDiscount(pool.count)}`}</div>
          <label>food will be deliver at</label><br/>
          <div>{`${pool.timer.split(':')[0]} PM`}</div>
          <br/>
          <div className='poolCount'>
            <i className="fas fa-circle fa-2x circleIcon"></i>
          </div>
          </div>

        )
        :
        null
      }
      </div>
    )
  }
}

export default OpenPools;