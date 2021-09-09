import * as actionTypes from "../constants/productConstant";

export const getProductReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_SUCCESS:
			return { products: action.payload };

		case actionTypes.GET_PRODUCTS_FAIL:
			return { error: action.payload };

		default:
			return state;
	}
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
			return { product: action.payload };

		case actionTypes.GET_PRODUCT_DETAIL_FAIL:
			return { error: action.payload };
		default:
			return state;
	}
};

//reducer is the final process , from here the data will finally go into the store
// initially inside store the products will be a blank array , the array will be filled when we call the api from the frontend

//here from productActions we are getting two things first the action and second the payload in which there is value or data

//inside reducer two things get imported by default , which is state and action

//inside action.payload the data will be in form of  array if it matches with GET_PRODUCT_SUCCESS ,
//but if it dosent matches then it might break our application ,because the default case has nothing to operate,

// so in default case we are passing products:[] which means if none cases match or some unexpected error happens, then a blank array
//will be passed.

//so we have to send empty array inside action.payload
//because inside components we have to loop the array and if inside action.payload if there is something else
//inplace of array ,such as string ,and if we map string, then the app will break

// from here the datas will get into getProducts

// In case of getProductDetailsReducer we are using state={product:{}} an object because here we will get a single product info unlike
//in previous case where we were getting all the products inside an array
