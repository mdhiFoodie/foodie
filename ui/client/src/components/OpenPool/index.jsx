import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
require('moment-countdown');

import fontawesome from '@fortawesome/fontawesome';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
fontawesome.library.add(faCircle);

class OpenPools extends Component {
  constructor() {
    super();

    this.state = {
      discount: ['no discount yet', 'free delivery', .05, .1, .15],
    }
    this.calcDiscount = this.calcDiscount.bind(this);
    this.nextDiscount = this.nextDiscount.bind(this);
    this.peopleNeededForNextDiscount = this.peopleNeededForNextDiscount.bind(this);
  }

  componentDidMount () {
    this.grabPools();
    // this.intervalID = setInterval(
    //   () => this.tick(),
    //   1000
    // ); 
  }

  // componentDidMount() {
  //   clearInterval(this.intervalID); 
  // }

  // tick() {
  //   this.setState({
      
  //   })
  // }

  calcDiscount(count) {
    if(count < 5) {
      return this.state.discount[0];
    }
    if(count < 10 && count > 5) {
      return this.state.discount[1];
    }
    if(count < 15 && count > 10) {
      return this.state.discount[2];
    }
    if(count < 20  && count > 15) {
      return this.state.discount[3];
    }
    if(count > 20) {
      return this.state.discount[4];
    }
  }
  nextDiscount(count) {
    if(count < 5) {
      return this.state.discount[1];
    }
    if(count < 10 && count > 5) {
      return this.state.discount[2];
    }
    if(count < 15 && count > 10) {
      return this.state.discount[3];
    }
    if(count < 20  && count > 15) {
      return this.state.discount[4];
    }
    if(count > 20) {
      return 'Maxed out bruh';
    }
  }
  peopleNeededForNextDiscount(count) {
    if(count < 5) {
      return 5 - count;
    }
    if(count < 10 && count > 5) {
      return 10 - count;
    }
    if(count < 15 && count > 10) {
      return 15 - count;
    }
    if(count < 20  && count > 15) {
      return 20 - count;
    }
    if(count > 20) {
      return 'gangs all here';
    }
  }

  // goToBusiness = async() => {
  //   const { history } = this.props; 
  //   history.push(`{}`)
  // }



  async grabPools () {
    const { data } = await axios.get(`http://localhost:3000/api/pool/grabAllPools`);
    this.setState({
      openPools: data
    });
  }

  render() {
    const { openPools, peopleNeededForNextDiscount, nextDiscount } = this.state; 
    console.log('openPools',this.state.openPools);
    return(
      <div onClick={this.goToBusiness}>
      {
        openPools && openPools.length ? openPools.map(pool => 
          <div className='usersPool' key={pool.bizName} >
          <div className='poolBizName'>{`${pool.bizName}`}</div>
          <label>pool ends:</label>
          <div className='poolEnds'>{`${moment(pool.eta).countdown().toString().split('and')[0]}`}</div>
          <label>discount:</label><br/>
          <div className='poolDiscount'>{`${this.calcDiscount(pool.count)}`}</div>
          <label>next discount</label><br/>
          <div className='poolNextDiscount'>{this.nextDiscount(pool.count)}</div>
          <label>delivery time:</label><br/>
          <div className='poolDeliveryTime'>{`${moment(pool.timer).countdown().toString().split('and')[0]}`}</div>
          <label>next discount in:</label><br/>
          <div className='poolPeopleNeeded'>{this.peopleNeededForNextDiscount(pool.count)} users</div>
          <div className='poolCount'>
            <div className="circleIcon">{pool.count}</div>
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