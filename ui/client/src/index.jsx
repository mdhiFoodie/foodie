import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import rootReducer from './reducers/index'; 

const initialState = {};
const middleware = [thunk]; 

const store = createStore(
  rootReducer,
  initialState, 
  applyMiddleware(...middleware)
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root")); 
