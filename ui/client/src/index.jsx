import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Feed from './components/Feed/index.jsx';
import Menu from './components/Menu/Menu.jsx';


// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { allReducers } from 'whateverthepathfileis';

// const store = createStore(allReducers);

ReactDOM.render(
  // <BrowserRouter>
  // <App/>
  // </BrowserRouter>
  // <Feed/>
  <Menu/>
  ,document.getElementById('root'),
);

// ReactDOM.render(<Provider store={store}><WHATEVER PARENT COMPONENT IS/></Provider>, document.getElementById("root")); 