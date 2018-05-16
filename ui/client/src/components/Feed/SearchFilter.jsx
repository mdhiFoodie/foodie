import React, { Component } from 'react';
import axios from 'axios';
// import Geocode from 'react-geocode';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchBusinessesInFeed} from '../../actions/actions-searchBusinessesInFeed.js';

class SearchFilter extends Component {
    constructor() {
        super();

        this.state = {
            search : '',
            restaurantSearches : [],
            restaurantSearchesSorted : [],
            value : 'totalorder'
        }
    }

    onTextHandler(e) {
        console.log('this is the state for search', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // sortRestaurants = (array, index) => {
    //     array.sort((a, b) => {
    //         return a[index] - b[index]
    //     });
    //     return array;
    // }

    filterClickHandler(e) {
        console.log('clicked on different filters and showing restaurants sorted', this.state.value);
        let sorted = this.state.restaurantSearchesSorted;
        if (e.target.value === 'totalorder') {
            sorted.sort((a,b) => {
                return a[5] - b[5]
            })
        }
        else if (e.target.value === 'rating') {
            sorted.sort( (a,b) => {
                return a[4] - b[4]
            })
        }
        else if (e.target.value === 'price') {
            sorted.sort ( (a,b) => {
                return a[3] - b[3]
            })
        }
        console.log('this is the sorted from search111111', sorted)
        this.setState({
            restaurantSearchesSorted : sorted,
            value : e.target.value
        });
        console.log('this is the sorted restaurants information that i need the reducer updated', this.state.restaurantSearchesSorted);
        this.props.searchBusinessesInFeed(this.state.restaurantSearchesSorted)
    }

    handleKeyPress = async (e) => {
        if(e.key === 'Enter'){
            let onPositionReceived = async (position) => {
                try {
                    const foodcategory = this.state.search;  
                    const searchRestaurants = await axios.get(`http://localhost:3000/api/users/feed/searchRestaurants/${foodcategory}`)
                    console.log('HERE =>', searchRestaurants.data)
                    console.log('this is position', position.coords)
                    let locations = searchRestaurants.data.map ( (restaurants) => {
                        let latitude = (restaurants.latitude - position.coords.latitude);
                        let longitude = (restaurants.longitude - position.coords.longitude);
                        let calculation = Math.sqrt(latitude*latitude + longitude*longitude) * 100;
                        let miles = calculation/1.609344;
                        if(miles <= 50) {
                            console.log('this is the restaurants', restaurants);
                            console.log('this is the calculation in miles', miles);
                            console.log('this is the restaurants name', restaurants.businessname);
                            console.log('this is the restaurants picture', restaurants.businesspicture);
                            console.log('this is the price', restaurants.price);
                            console.log('this is the rating', restaurants.rating);
                            console.log('this is the total orders', restaurants.totalorder);
                            console.log('this is the id', restaurants.id);
                            this.state.restaurantSearches.push([restaurants.id, restaurants.businessname, restaurants.businesspicture, miles, restaurants.price, restaurants.rating, restaurants.totalorder, restaurants.foodcategory])
                        }
                    })
                    console.log('this is the state', this.state.restaurantSearches)
                    this.setState({
                        restaurantSearchesSorted : this.state.restaurantSearches.sort( (a,b) => {
                            return a[2]-b[2];
                        })
                    })
                    console.log('this is the new state for sort', this.state.restaurantSearchesSorted)
                    this.props.searchBusinessesInFeed(this.state.restaurantSearchesSorted)
                }
                catch(err) {
                    console.log(err)
                }
            };
            let locationNotReceived = (positionError) => {
                console.log(positionError);
            };
            if(navigator.geolocation) {
                let position = navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived);
                let watch = navigator.geolocation.watchPosition(onPositionReceived, locationNotReceived);
                console.log('this is watch', watch);
                navigator.geolocation.clearWatch(watch);
            }
    }
}

    render() {
        return(
            <div className='searchFeedContainer'>
                
                <div>
                    <input className='feedSearch' onChange={this.onTextHandler.bind(this)} name='search' placeholder='search' onKeyPress={this.handleKeyPress.bind(this)}></input>
                </div>

                <div>
                    
                    <select value={this.state.value} onChange={this.filterClickHandler.bind(this)}>
                    <option default value='filter'>filter</option>
                    <option className='hairline-down-arrow' value='totalorder'>totalorder</option>
                    <option value='rating'>rating</option>
                    <option value='price'>$$$</option>
                    </select>
                    <div className="hairline-down-arrow"></div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         SearchBusinesses : state.SearchBusinessesInFeed
//     };
// };

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchBusinessesInFeed
    }, dispatch);
};

export default connect(null, matchDispatchToProps)(SearchFilter);