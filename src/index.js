import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import shopReducer from './store/reducers/shop';
import {Elements, StripeProvider} from 'react-stripe-elements';

// setup redux dev tools to use our app state
// enable these to use thunk chrome dev tool
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// composeEnhancers prevents using promises in actions, if you find a solution please share
// const store = createStore(shopReducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(shopReducer, applyMiddleware(thunk));

const app = (

    <Provider store={store}>
        <BrowserRouter>
            {/*StripeProvider initializes the stripe and passes in the publishable key*/}
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <Elements>
                    <App/>
                </Elements>
            </StripeProvider>
        </BrowserRouter>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
