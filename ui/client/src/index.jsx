import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Feed from './components/Feed/index.jsx';
import Menu from './components/Menu/Menu.jsx';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers/index.js';
import fa from 'font-awesome-webpack';

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(rootReducer, initialState, applyMiddleWare(...middleware));
const store = createStore(rootReducer, applyMiddleware(thunk, promise()))
// ReactDOM.render(
//   // <BrowserRouter>
//   <App/>
//   // </BrowserRouter>
//   // <Feed/>
//   // <Menu/>
//   ,document.getElementById('root'),
// );

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById("root")); 
