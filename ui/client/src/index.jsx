import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { allReducers } from 'whateverthepathfileis';

// const store = createStore(allReducers);

ReactDOM.render(
  // <h1>HELLO UNIVERSE</h1>
  <App/>
  ,document.getElementById('root'),
);

// ReactDOM.render(<Provider store={store}><WHATEVER PARENT COMPONENT IS/></Provider>, document.getElementById("root")); 