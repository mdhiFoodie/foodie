import { combineReducers } from 'redux';
import BusinessesReducer from './reducers-businessesData.js';
import FriendsReducer from './reducers-friendsData.js';
import MenusReducer from './reducers-menusData.js';
import MessagesReducer from './reducers-messagesData.js';
import OrdersReducer from './reducers-ordersData.js';
import ReviewsReducer from './reducers-reviewsData.js';
import UsersReducer from './reducers-usersData.js';
import searchBusinesses from './reducers-searchBusinessesInFeed.js';

import usersSignupReducer from './usersSignupReducer.js';
import usersInformationReducer from './usersInformationReducer.js';


const rootReducer = combineReducers({
  // Still trying to make the post request as an action 
    usersData: usersSignupReducer,
  //Gets every user information when they login or sign up 
    getUsersInformation: usersInformationReducer,

    BusinessesReducer : BusinessesReducer,
    FriendsReducer : FriendsReducer,
    MenusReducer : MenusReducer,
    MessagesReducer : MessagesReducer,
    OrdersReducer : OrdersReducer,
    ReviewsReducer : ReviewsReducer,
    UsersReducer : UsersReducer,
    searchBusinesses : searchBusinesses
});

export default rootReducer;
