import React, { Component } from 'react';
import axios from 'axios';

import './userProfile.scss';

import fontawesome from '@fortawesome/fontawesome'
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart'

fontawesome.library.add(faShoppingCart);

class ArchivedOrders extends Component {
  constructor() {
    super();
  }


  render() {
    const { orders } = this.props;
    console.log('this is the mother fucking order mother fuckers: ', orders);
    return (
      <div>
          {
            orders && orders.length ? orders.map(order =>
              <div key={`${order.id}`} className='archivedContainers'>
              {/* <div className='orderHistPic'>
                <img src='#' alt='businessPic' />
              </div> */}
              
              <div className='orderBusinessName'>
              <h3>{order.businessName}</h3>
              </div>

              <div className='itemsName'><i className="fas fa-shopping-cart icon"></i></div>
              <div className='orderItems'>
              {
                JSON.parse(order.cart).map(item => {

                  return (
                    <div className='eachOrderItem'>{`${item.quantity}   ${item.item}  $ ${item.price}`}</div>
                  )
                })
              }
              </div>

              <div className='orderHistPrice'>
                {`Total: $ ${order.total/100}`}
              </div>

              {/* <div className='circleIconOrders'>
              <div className='countText'>{order.count}</div> 
              </div> */}
              </div>
            )
            :
            <div>You haven't order anything yet</div>
          }
      </div>
    )
  }
}

export default ArchivedOrders;