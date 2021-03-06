import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 

import App from './App';

const AppWithRouter = withRouter(App)

const store = createStore(
    () => {},
    applyMiddleware(thunk,logger)
)

ReactDOM.render(
<Provider store={store}>
    <Router>
        <AppWithRouter />
    </Router>
</Provider>
, document.getElementById('root'));