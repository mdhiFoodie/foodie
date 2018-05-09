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
  }

  renderFoodTypes() {
    const foodType = [];
    for (var key in this.state.currentMenu) {
      foodType.push(<div className={`${key}`} onClick={(e) => this.renderFoodItems(e.target.className)}>{key}</div>);
    }
    this.setState({
      food: foodType
    });
  }

  renderFoodItems(foodThing) {
    const foodItems = [];
    for (var i = 0; i < this.state.currentMenu[foodThing].length; i++) {
      foodItems.push(<div><li >{this.state.currentMenu[foodThing][i].name}</li>, <li >{this.state.currentMenu[foodThing][i].price}</li></div>);
      }
      this.setState({
         foods: foodItems
      });
  }
  
  addQuantity() {
    
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

  render() {
    return (
      <div>
        <ul>
        {/*use to overlap restaurant name onto image https://www.w3schools.com/howto/howto_css_image_text.asp */}
          <li onClick={this.handleClick}> <img src="http://placecorgi.com/260/180" alt=""/> <br/>Los Burritos</li>
           ??{this.state.food}{this.state.foods}
        </ul>
      </div>
    );
  }
}

export default Menu;