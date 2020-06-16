import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { DB_CONFIG } from './Config/Firebase/db_config';
import { HashRouter } from 'react-router-dom';

const firebase = require('firebase');
// firebase.initializeApp(DB_CONFIG);

// const routing = (
//   <Router>
//     <div id='routing-container'>
//       <Route path='/addcard' component={AddCard}></Route>
//       <Route path='/home' component={App}></Route>
//
//     </div>
//   </Router>
// );

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
