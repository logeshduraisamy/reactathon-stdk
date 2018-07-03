//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise, logger)
);



ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
