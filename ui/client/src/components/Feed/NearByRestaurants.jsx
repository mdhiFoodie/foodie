import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NearByRestaurantsEntries from './NearByRestaurantsEntries.jsx';

import './Feed.scss'; 

class NearByRestaurants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // searches: false
        }
    }

    render() {
            console.log('this is the reducer type???', this.props)
            //so if this.props.loadingStatus.type === 'SEARCH_LOADING_PENDING' then i want to
                //make it so that i show the loading,
            //else which is going t 'SEARCH_LOADING_FULFILLED' then show the other thing.
            console.log('this.props.searchloading reducer', this.props.loadingStatus && this.props.loadingStatus.loading)

        return(
            <div className='NearByRestaurantsContainer'>
                <div className ='heading'>
                <h2>nearby restaurants</h2>
                </div>
                
                {this.props.loadingStatus.type === 'SEARCH_LOADING_FULFILLED' ? 
                <div className='searchResultContainer'>
                    {
                    this.props.searchBusinesses ? this.props.searchBusinesses.businesses.map ( (restaurant, key) => (
                        <div className='restaurantsList'> <NearByRestaurantsEntries history={this.props.history} key={key} restaurant={restaurant}/> </div> 
                    ))
                    :
                    <div> <img src='./loading.gif'/></div>
                    }
                </div>
                :
                <div>
                    NO SEARCHES MADE
                </div>
                }

            </div>
        )
    }
};

// export default NearByRestaurants;

const mapStateToProps = (state) => {
    return {
        searchBusinesses : state.searchBusinesses,
        loadingStatus: state.loadingStatus
    };
};

export default connect(mapStateToProps, null)(NearByRestaurants);