import  {combineReducers} from 'redux';
import BusinessesReducer from './reducers-businessesData.js';
import FriendsReducer from './reducers-friendsData.js';
import MenusReducer from './reducers-menusData.js';
import MessagesReducer from './reducers-messagesData.js';
import OrdersReducer from './reducers-ordersData.js';
import ReviewsReducer from './reducers-reviewsData.js';
import UsersReducer from './reducers-usersData.js';


const allReducers = combineReducers({
    BusinessesReducer : BusinessesReducer,
    FriendsReducer : FriendsReducer,
    MenusReducer : MenusReducer,
    MessagesReducer : MessagesReducer,
    OrdersReducer : OrdersReducer,
    ReviewsReducer : ReviewsReducer,
    UsersReducer : UsersReducer,
});

export default allReducers;