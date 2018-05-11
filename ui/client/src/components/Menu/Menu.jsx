import React, { Component } from 'react';
import axios from 'axios';

//click events that grab values using classname will likely have to be switched to firstchild.innerHTML to not conflict with css 

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      currentBizId: 1 /*should be set on click of restaurant thumbnail (can be grabbed off the menu if response is modified on server side)*/,
      currentBizName: 'Los Burritos' /*should be set on click of restaurant thumbnail (can be grabbed off the menu if response is modified on server side)*/,
      currentMenu: null,
      food: null,
      foods: null,
      currentItem: null,
      currentItemQuantity: null,
      currentItemPrice: 3.75,
      usersCart: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.itemClick = this.itemClick.bind(this);
    this.viewCart = this.viewCart.bind(this);
    this.checkout = this.checkout.bind(this);
  }
  
    async handleClick() {
      //need to grab specific biz id on click
      //biz id should be attached to image on sql query for restaurants
      try {
        const response = await axios.get(`http://localhost:3000/api/menu/menuGet/${this.state.currentBizId}`)
        this.setState({
          currentMenu: response.data
        });
        this.renderFoodTypes();
      } catch (error) {
        console.error(error);
      }
    }

  renderFoodTypes() {
    const foodType = [];
    for (var key in this.state.currentMenu) {
      foodType.push(<div key={key} className={key} onClick={(e) => this.renderFoodItems(e.target.className)}>{key}</div>);
    }
    this.setState({
      food: foodType
    });
  }

  renderFoodItems(foodThing) {
    const foodItems = [];
    let aFG= this.state.currentMenu[foodThing]
    for (var i = 0; i < aFG.length; i++) {
      foodItems.push(
      <div key={aFG[i].name} className={aFG[i].name} onClick={this.itemClick}>
      <li className={aFG[i].name} id={aFG[i].price}>{aFG[i].name}</li>
      <li className={aFG[i].name} id={aFG[i].price}>{aFG[i].price}</li>
      </div>);
      }
      this.setState({
        foods: foodItems
      });
  }
  
  itemClick(e) {
    this.setState({
      currentItem: e.target.className/*the item clicked,*/,
      currentItemQuantity: 1,  /*quantity incremented*/
      currentItemPrice: e.target.id

    })
  }

  adjustQuantity(amount) {
    if(this.state.currentItemQuantity === 0 && amount === -1) {
      return;
    }
    this.setState({
      currentItemQuantity: this.state.currentItemQuantity + amount
    });
  }

  async addToCart() {
    const thing = [this.state.currentItemPrice, this.state.currentItemQuantity]
    try {
      const item = await axios.post(`http://localhost:3000/api/cart/addItem`, {
      userId: localStorage.getItem('id'),
      item: this.state.currentItem,
      quantity: JSON.stringify(thing)
      });
    } catch (error) {
      console.error(error);
    } 

    this.setState({
      currentItem: null,
      currentItemQuantity: null
    })
  }

  async viewCart() {
    //switch to mouseover event after changing to stylized css div
    try {
      const response = await axios.get(`http://localhost:3000/api/cart/getCart/${localStorage.getItem('id')}`)
      const cart = [];
      let subtotal = 0;
      for (var key in response.data) {
        let quantity = JSON.parse(response.data[key])[1];
        let price = JSON.parse(response.data[key])[0];
        subtotal += price * quantity;
        cart.push(<div key={key} className={key}>{key} Quantity:  {quantity} Price: ${price * quantity}</div>);
      }
      cart.push(<div key={subtotal}>Subtotal: {subtotal}</div>);
      cart.push(<button key={'checkout'}onClick={this.checkout}>Checkout</button>);
     
      this.setState({
        usersCart: cart,
        subTotal: subtotal
      });
    } catch (error) {
      console.error(error);
    }
  }

  checkout(){
    console.log('checkout clicked', this.state);
  }

  render() {
    return (
      <div>
        <ul>
        {/*use to overlap restaurant name onto image https://www.w3schools.com/howto/howto_css_image_text.asp */}
          <li onClick={this.handleClick}> <img src="http://placecorgi.com/260/180" alt=""/> <br/>Los Burritos</li>
          {this.state.food}
          {this.state.foods}
          {this.state.usersCart}
          {this.state.usersCart !== null ? 
            <button onClick={() => this.setState({
              usersCart: null
            })}>Close Cart</button>
            :
            <div></div>
          }
        </ul>
        {this.state.currentItem === null ? 
          <div></div> 
        : 
        <div>
        <button onClick={this.addToCart}>Add To Cart</button>
          {this.state.currentItem}
        <button onClick={() => this.adjustQuantity(-1)}>-</button>
        <span>Quantity: {this.state.currentItemQuantity}</span>
        <button onClick={() => this.adjustQuantity(1)}>+</button>
        </div>}
        <div>
          <button onClick={this.viewCart}>View Cart</button>
        </div>
      </div>
    );
  }
}

export default Menu;