import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import sellersReducer from './reducers/sellersReducer'
import buyersReducer from './reducers/buyersReducer'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import { combineReducers } from "redux";
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'


const rootReducer = combineReducers({
  buyers: buyersReducer,
  sellers: sellersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))) //, buyersReducer

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
       
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
