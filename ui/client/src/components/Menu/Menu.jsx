import React, { Component } from 'react';
import axios from 'axios';


class Menu extends Component {
  constructor() {
    super();
    this.state = {
      currentMenu: null,
      food: null,
      foods: null,
      currentItem: null,
      currentItemQuantity: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.itemClick = this.itemClick.bind(this);
  }

  renderFoodTypes() {
    const foodType = [];
    for (var key in this.state.currentMenu) {
      foodType.push(<div className={key} onClick={(e) => this.renderFoodItems(e.target.className)}>{key}</div>);
    }
    this.setState({
      food: foodType
    });
  }

  renderFoodItems(foodThing) {
    const foodItems = [];
    let aFoodGroup = this.state.currentMenu[foodThing]
    for (var i = 0; i < aFoodGroup.length; i++) {
      foodItems.push(
      <div className={this.state.currentMenu[foodThing][i].name} onClick={this.itemClick}>
      <li className={this.state.currentMenu[foodThing][i].name}>{this.state.currentMenu[foodThing][i].name}</li>
      <li className={this.state.currentMenu[foodThing][i].name}>{this.state.currentMenu[foodThing][i].price}</li>
      </div>);
      }
      this.setState({
         foods: foodItems
      });
  }
  
  itemClick(e) {
    this.setState({
      currentItem: e.target.className/*the item clicked,*/,
      currentItemQuantity: 1  /*quantity incremented*/
    })
  }

  async addToCart() {
    try {
      const item = await axios.post(`http://localhost:3000/api/cart/addItem`, {
      userId: localStorage.getItem('id'),
      item: this.state.currentItem,
      quantity: this.state.currentItemQuantity
      });
      // await this.setState({
      //   currentMenu: response.data
      // });
      // await this.renderFoodTypes();
    } catch (error) {
      console.error(error);
    } 

    this.setState({
      currentItem: null,
      currentItemQuantity: null
    })
  }

  async handleClick() {
    //gonna need to grab biz id from sql db, then query mngod
    //need to grab specific biz id on click
    try {
      const response = await axios.get(`http://localhost:3000/api/menu/menuGet/${1}`)
      await this.setState({
        currentMenu: response.data
      });
      await this.renderFoodTypes();
    } catch (error) {
      console.error(error);
    }
  }

  adjustQuantity(amount) {
    if(this.state.currentItemQuantity === 0 && amount === -1) {
      return;
    }
    this.setState({
      currentItemQuantity: this.state.currentItemQuantity + amount
    });
  }

  viewCart() {
    //switch to mouseover event after changing to stylized css div
    console.log('view cart clicked');
  }

  render() {
    return (
      <div>
        <ul>
        {/*use to overlap restaurant name onto image https://www.w3schools.com/howto/howto_css_image_text.asp */}
          <li onClick={this.handleClick}> <img src="http://placecorgi.com/260/180" alt=""/> <br/>Los Burritos</li>
           ??{this.state.food}{this.state.foods}
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