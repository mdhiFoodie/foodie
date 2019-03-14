import { combineReducers } from 'redux';
import businessesData from './reducers-businessesData.js';
import FriendsReducer from './reducers-friendsData.js';
import MenusReducer from './reducers-menusData.js';
import MessagesReducer from './reducers-messagesData.js';
import OrdersReducer from './reducers-ordersData.js';
import ReviewsReducer from './reducers-reviewsData.js';
import searchBusinesses from './reducers-searchBusinessesInFeed.js';
import loadingStatus from './reducers-searchLoadingStatus.js';

import usersSignupReducer from './usersSignupReducer.js';
import usersInformationReducer from './usersInformationReducer.js';


const rootReducer = combineReducers({
  // Still trying to make the post request as an action 
    usersData: usersSignupReducer,
  //Gets every user information when they login or sign up 
    getUsersInformation: usersInformationReducer,
    //search businesses data after it gets sorted
    businessesData : businessesData,
    FriendsReducer : FriendsReducer,
    MenusReducer : MenusReducer,
    MessagesReducer : MessagesReducer,
    OrdersReducer : OrdersReducer,
    ReviewsReducer : ReviewsReducer,
    //search businesses data after it gets sorted
    searchBusinesses : searchBusinesses,
    //loading status in search
    loadingStatus: loadingStatus
});

export default rootReducer;