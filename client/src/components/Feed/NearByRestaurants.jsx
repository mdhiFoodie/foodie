import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NearByRestaurantsEntries from './NearByRestaurantsEntries.jsx';

import './Feed.scss';

class NearByRestaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // searches: false
    };
  }

  render() {
    return (
      <div className="NearByRestaurantsContainer">
        {this.props.loadingStatus.type === 'SEARCH_LOADING_FULFILLED' ? (
          <div className="searchResultContainer">
            {this.props.searchBusinesses ? (
              this.props.searchBusinesses.businesses.map((restaurant, key) => (
                <div className="restaurantsList">
                  {' '}
                  <NearByRestaurantsEntries
                    history={this.props.history}
                    key={key}
                    restaurant={restaurant}
                  />{' '}
                </div>
              ))
            ) : (
              <div className="loadingGif">
                {' '}
                <img src="./loading.gif" />
              </div>
            )}
          </div>
        ) : (
          <div>NO SEARCHES MADE</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchBusinesses: state.searchBusinesses,
    loadingStatus: state.loadingStatus,
  };
};

export default connect(
  mapStateToProps,
  null
)(NearByRestaurants);
