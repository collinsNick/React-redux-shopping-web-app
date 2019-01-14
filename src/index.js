import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import shopReducer from './store/reducers/shop'

// setup redux dev tools to use our app state
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(shopReducer, composeEnhancers())

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
