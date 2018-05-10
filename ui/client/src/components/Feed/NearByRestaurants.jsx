import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NearByRestaurantsEntries from './NearByRestaurantsEntries.jsx';

class NearByRestaurants extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        console.log('this.props', this.props)
        return(
            <div className='NearByRestaurantsContainer'>
                this is the nearby restaurants where you map through WITH THE RESPONSE THAT I SENT UP TO REDUX STORE
                FROM THE SEARCH FILTER

                {/* {this.props.searchBusinesses.map = ( (restaurant) => (
                    <NearByRestaurantsEntries restaurant={restaurant}/>
                ))} */}
            </div>
        )
    }
};

// export default NearByRestaurants;

const mapStateToProps = (state) => {
    return {
        searchBusinesses : state.SearchBusinessesInFeedReducer
    };
};

export default connect(mapStateToProps, null)(NearByRestaurants);