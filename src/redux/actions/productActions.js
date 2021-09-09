import axios from "axios";
import * as actionTypes from "../constants/productConstant";

const url = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
	try {
		const { data } = await axios.get(`${url}/products`);

		dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		const { data } = await axios.get(`${url}/product/${id}`);

		dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
			payload: error.response,
		});
	}
};

//now we have to pass the state inside redux or preserve the state inside redux after getting the data from api

//here we are using a middleware which is thunk
//export const getProducts = () =>  async(dispatch) => { here async(dispatch) is thunk

// Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

//here whatever data we get inside of response we have to dispatch it
//we will get data in form of -- { data:[ {},{},{} ]}

//so instead of using response variable , we are directly destructuring data in place of response
//const response = await axios.get(`${url}/products`)

//dispatch always calls reducer and inside reducer we have a switch case statement which matches the
//values

//actions are kind of controllers like in backend
//we use dispatch to update the prev state

//type is like, with which type it is going to match in reducer, inside reducer we have a switch and case , so the type gets matched
//with the switch case statement and if it matches with any case then we have value which is called payload, we will the dispatch
//the payload

//instead of importing GET_PRODUCTS_SUCCESS from a constant file , we can also hardcode the type inside dispatch
//dispatch({ type: SUCCESS, payload: data });

//dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data }); ---- here basically we have defined a hardcoded value
//for GET_PRODUCTS_SUCCESS which is "getProductsSuccess" and importing this from a constant file , this process is nothing but just
//a good convention or a secure way of defining action type

//from here the dispatch will call the reducer which it always does in every case
