import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Feed from './components/Feed/index.jsx';
import Menu from './components/Menu/Menu.jsx';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.jsx';

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(rootReducer, initialState, applyMiddleWare(...middleware));
const store = createStore(rootReducer, applyMiddleware(thunk))
// ReactDOM.render(
//   // <BrowserRouter>
//   <App/>
//   // </BrowserRouter>
//   // <Feed/>
//   // <Menu/>
//   ,document.getElementById('root'),
// );

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root")); 
