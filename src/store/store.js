import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import shopReducer from "./reducers";

// use this to show redux dev tool
const store = createStore(
  shopReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(shopReducer, applyMiddleware(thunk));

export default store;
