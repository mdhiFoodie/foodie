import React, { Component } from 'react';
// import axios from 'axios';
// import { geolocated } from 'react-geolocation';

class SearchFilter extends Component {
    constructor() {
        super();

        this.state = {
            search : '',
            restaurantSearches : [],
            restaurantSearchesSorted : [],
            getInitialState : () => {
                return{
                    value: 'Popularity'
                }
            }
        }
    }

    onTextHandler(e) {
        console.log('this is the state for search', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    filterClickHandler(e) {
        console.log('clicked on different filters')
        this.setState({
            value : e.target.value
        })
    }

    handleKeyPress = async (e) => {
        if(e.key === 'Enter'){
            let onPositionReceived = async (position) => {
                try {
                    const businessname = this.state.search;  
                    const searchRestaurants = await axios.get(`http://localhost:3000/api/users/feed/searchRestaurants/${businessname}`)
                    console.log('HERE =>', searchRestaurants.data)
                    console.log('this is position', position.coords)
                    let locations = searchRestaurants.data.map ( (restaurants) => {
                        let latitude = (restaurants.latitude - position.coords.latitude);
                        let longitude = (restaurants.longitude - position.coords.longitude);
                        let calculation = Math.sqrt(latitude*latitude + longitude*longitude) * 100;
                        let miles = calculation/1.609344;
                        if(miles <= 50) {
                            // console.log('this is the restaurants', restaurants);
                            // console.log('this is the calculation in miles', miles);
                            // console.log('this is the restaurants name', restaurants.businessname);
                            // console.log('this is the restaurants picture', restaurants.businesspicture);
                            this.state.restaurantSearches.push([restaurants.businessname, restaurants.businesspicture, miles])
                        }
                    })
                    console.log('this is the state', this.state.restaurantSearches)
                    this.setState({
                        restaurantSearchesSorted : this.state.restaurantSearches.sort( (a,b) => {
                            return a[2]-b[2];
                        })
                    })
                    console.log('this is the new state for sort', this.state.restaurantSearchesSorted)
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


                // let locations = searchRestaurants.data.map( (restaurants) => {
                //     return restaurants.distance = restaurants.latitude
                //     return restaurants.distance = Math.hypot()
                // })

                // console.log('this is the map address', locations)

                // let locations = searchRestaurants.data.map ( (restaurant) => {
                //     const findGeoCode = axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                //         params: {
                //             address: restaurant.businessaddress,
                //             key: 'AIzaSyDb8SbO5ODjgXx6YSNjwMeL7pCTAStfahY'
                //         }
                //     })
                //     return findGeoCode
                // })

                

                // console.log('this is the geocode for restaurants/businesses', locations)

                // .then(response => {
                //     console.log('hello this is the response for searching restaurants', response)
                    //get the response.address and set it to a variable [array of all restaurants with keyword] = array of
                    //example: let location = '22 Main st Boston MA' (response.address or something)

                    // const findGeoCode = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                    //     params: {
                    //         address: locations[0],
                    //         key: 'AIzaSyDb8SbO5ODjgXx6YSNjwMeL7pCTAStfahY'
                    //     }
                    // })
                    // console.log('this is geocode',findGeoCode)

                    // const findDistanceBtwnLocations = await axios.get
                    // .then(response => {
                    //     console.log('this is the response from the geocode', response)
                        //with this response i'm going to use a function to compare my current location
                        //to the response.address coordinates.
                            //then i want to grab distances all within 20 miles or something
                                //push them up to the restaurants array
                    // })
                    // .catch(err => {
                    //     console.log('this is the error from the geocode', err)
                    // })

                    //get the response.address/location then i should want to get the positions
                    // push to this.state.restaurants of all the names
                    // SEND THIS.STATE.RESPONSE UP TO REDUX STORE SO THAT I CAN MAP THROUGH IT AND DISPLAY
                    // RESTAURANTS WITH THAT NAME
                // })
                // .catch(err => {
                //     console.log('hello this is the error handler for searching restaurants', err)
                // })
    }
}

    render() {
        return(
            <div className='SearchFeedContainer'>
                
                <div>
                    <input onChange={this.onTextHandler.bind(this)} name='search' placeholder='search' onKeyPress={this.handleKeyPress.bind(this)}></input>
                </div>

                <div>
                    <select value={this.state.value} onChange={this.filterClickHandler.bind(this)}>
                    <option value='Popularity'>Popularity</option>
                    <option value='Reviews'>Reviews</option>
                    <option value='$$$'>$$$</option>
                    </select>
                </div>

            </div>
        )
    }
}

export default SearchFilter;