import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import App from "./App";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      {/* StripeProvider initializes the stripe and passes in the publishable key */}
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
        <Elements>
          <App />
        </Elements>
      </StripeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
