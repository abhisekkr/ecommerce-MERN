import axios from "axios";
import * as actionTypes from "../constants/productConstant";

const url = "https://apiecomme.herokuapp.com";

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
