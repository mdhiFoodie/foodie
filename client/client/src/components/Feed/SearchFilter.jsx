import React, { Component } from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchBusinessesInFeed} from '../../actions/actions-searchBusinessesInFeed.js';
import {loadingStatus} from '../../actions/actions-searchLoadingStatus.js';

class SearchFilter extends Component {
    constructor() {
        super();

        this.state = {
            search: '',
            restaurantSearches: [],
            restaurantSearchesSorted: [],
            value: 'filter',
            loading: false
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
        let sorted = this.state.restaurantSearchesSorted;
        if (e.target.value === 'totalorder') {
            sorted.sort((a,b) => {
                return a[6] - b[6]
            })
        }
        else if (e.target.value === 'rating') {
            sorted.sort( (a,b) => {
                return a[5] - b[5]
            })
        }
        else if (e.target.value === 'price') {
            sorted.sort ( (a,b) => {
                return a[4] - b[4]
            })
        }
        this.setState({
            restaurantSearchesSorted : sorted,
            value : e.target.value,
        });
        this.props.searchBusinessesInFeed(this.state.restaurantSearchesSorted)
    }

    handleKeyPress = async (e) => {
        if(e.key === 'Enter'){
            this.setState({
                loading: true,
                restaurantSearches: [],
                restaurantSearchesSorted: []
            }, () => {
                this.props.loadingStatus(this.state.loading);
            });
            console.log('this is the state loading', this.state.loading)
            let onPositionReceived = async (position) => {
                try {
                    const foodcategory = this.state.search.toLowerCase();  
                    const searchRestaurants = await axios.get(`http://localhost:3000/api/users/feed/searchRestaurants/${foodcategory}`)
                    console.log('HERE =>', searchRestaurants.data)
                    console.log('this is position', position.coords)
                    let locations = searchRestaurants.data.map ( (restaurants) => {
                        let latitude = (restaurants.latitude - position.coords.latitude);
                        let longitude = (restaurants.longitude - position.coords.longitude);
                        let calculation = Math.sqrt(latitude*latitude + longitude*longitude) * 100;
                        let miles = calculation/1.609344;
                        if(miles <= 20) {
                            console.log('this is the restaurants', restaurants);
                            console.log('this is the calculation in miles', miles);
                            console.log('this is the restaurants name', restaurants.businessname);
                            console.log('this is the restaurants picture', restaurants.businesspicture);
                            console.log('this is the price', restaurants.price);
                            console.log('this is the rating', restaurants.rating);
                            console.log('this is the total orders', restaurants.totalorder);
                            console.log('this is the ids', restaurants.id);
                            this.state.restaurantSearches.push([restaurants.id, restaurants.businessname, restaurants.businesspicture, miles, restaurants.price, restaurants.rating, restaurants.totalorder, restaurants.foodcategory])
                        }
                    })
                    console.log('this is the state', this.state.restaurantSearches)
                    this.setState({
                        restaurantSearchesSorted : this.state.restaurantSearches.sort( (a,b) => {
                            return a[3]-b[3];
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
                  <option selected disable hidden value=''>filter</option>
                  <option className='hairline-down-arrow' value='totalorder'>total order</option>
                  <option value='rating'>rating</option>
                  <option value='price'>$$$</option>
                  </select>
                  <div className="hairline-down-arrow"></div>
              </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchBusinesses : state.searchBusinesses,
        loadStatus: state.loadingStatus
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchBusinessesInFeed,
        loadingStatus
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SearchFilter);