import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Feed from './components/Feed';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { allReducers } from 'whateverthepathfileis';

// const store = createStore(allReducers);

ReactDOM.render(
  // <h1>HELLO UNIVERSE</h1>
  <Feed/>
  ,document.getElementById('root'),
);