import React, { Component } from 'react';
// import NearByRestaurantsEntries from './NearByRestaurantsEntries.jsx';

class NearByRestaurants extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div className='NearByRestaurantsContainer'>
                this is the nearby restaurants where you map through WITH THE RESPONSE THAT I SENT UP TO REDUX STORE
                FROM THE SEARCH FILTER
                {/* {this.props.restaurantInfo.map = (restaurant) => {
                    <NearByRestaurantsEntries restaurant={restaurant}/>
                }} */}
            </div>
        )
    }
};

export default NearByRestaurants;