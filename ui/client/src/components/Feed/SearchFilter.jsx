import React, { Component } from 'react';
// import axios from 'axios';
// import { geolocated } from 'react-geolocation';

class SearchFilter extends Component {
    constructor() {
        super();

        this.state = {
            search : '',
            restaurants : [],
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

    handleKeyPress(e) {
        if(e.key === 'Enter'){
            console.log('enter pressed for search')
            let onPositionReceived = (position) => {
                console.log(position);
            };
            let locationNotReceived = (positionError) => {
                console.log(positionError);
            };
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived);
                let watch = navigator.geolocation.watchPosition(onPositionReceived, locationNotReceived);
                console.log(watch);
                navigator.geolocation.clearWatch(watch);
            }
            // axios.get(`/api/users/feed/searchRestaurants/${this.state.search}`)
            //     .then(response => {
            //         console.log('hello this is the response for searching restaurants', response)
                        //push to this.state.restaurants of all the names
                        //SEND THIS.STATE.RESPONSE UP TO REDUX STORE SO THAT I CAN MAP THROUGH IT AND DISPLAY
                        //RESTAURANTS WITH THAT NAME
            //     })
            //     .catch(err => {
            //         console.log('hello this is the error handler for searching restaurants', err)
            //     })
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