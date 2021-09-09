import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	getProductReducer,
	getProductDetailsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
	getProducts: getProductReducer,
	getProductDetails: getProductDetailsReducer,
	cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//createSTORE takes two arguments, first one is reducer and the second is middleware

//currently we have one reducer , but in future we would have multiple reducers

//if we had a single reducer we could have passed it directly inside createStore function,
//but here we would have multiple reducers so we will use combineReducer function inside which we
//will have key value pair thing ,

//getProducts: getProductReducer, here the key is getProducts , if this is the key then it will call
//getProductReducer function which is in reducer.

//we will use a middleware called Thunk , because the API which we are gonna call , will be called with help of redux
//so for this we will need a middleware

//composeWithDevTools this function connects our store with the redux dev tools

//from the UI side the first step will be , it will call getProducts or getProductDetails and then the whole API calling process
//will start
