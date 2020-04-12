import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import shopReducer from './store/reducers/shop';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {Elements, StripeProvider} from 'react-stripe-elements';

// use this to show redux dev tool
const store = createStore(shopReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));

// const store = createStore(shopReducer, applyMiddleware(thunk));

const app = (

    <Provider store={store}>
        <BrowserRouter>
            {/*StripeProvider initializes the stripe and passes in the publishable key*/}
            {/* <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx"> */}
                {/* <Elements> */}
                    <App/>
                {/* </Elements> */}
            {/* </StripeProvider> */}
        </BrowserRouter>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
