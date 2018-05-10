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
        // console.log('this.props is coming from nearbyrestaurants', this.props.searchBusinesses)

        return(            
            <div className='NearByRestaurantsContainer'>
                this is the nearby restaurants where you map through WITH THE RESPONSE THAT I SENT UP TO REDUX STORE
                FROM THE SEARCH FILTER
                {/* {this.props.searchBusinesses && JSON.stringify(this.props.searchBusinesses.businesses)} */}
                {this.props.searchBusinesses && this.props.searchBusinesses.businesses.map ( (restaurant, key) => (
                    <NearByRestaurantsEntries key={key} restaurant={restaurant}/>
                ))}
            </div>
        )
    }
};

// export default NearByRestaurants;

const mapStateToProps = (state) => {
    return {
        searchBusinesses : state.searchBusinesses
    };
};

export default connect(mapStateToProps, null)(NearByRestaurants);