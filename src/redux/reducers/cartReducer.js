import * as actionTypes from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const item = action.payload;

			const exist = state.cartItems.find((product) => product.id === item.id);
			if (exist) return;

			return { ...state, cartItems: [...state.cartItems, item] };

		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(product) => product.id !== action.payload
				),
			};
		default:
			return state;
	}
};

//find function return a boolean value, and find also returns a matched object which means , if product.id
//matches with the item.id , then it will return the matched object which is item object, the whole object
//and if not matched , it returns undefined

//in return line , at first we are returning the state which means , the items which are already present inside,
// after that we will push the new items inside the cartItems array, in cartItems we are spreading the already present
//items and then pushing the new items , in simple we are putting the items inside cartItems ,
//return {...state,cartItems:[...state.cartItems,item]};
//here we are using spread operator so that the new  items do not replace the old items,so we are pushing the
//new items, keeping the old items inside cartItems safe.

//If the item already exist in the cart then we donot want the item to get added again , so we are just rteurning
//by not adding it.

//In remove reducer ,from the whole array of objects, we want to send only those objects which donot matches with the
// items id which we want to remove

//the logic inside return is , inside action.payload ,we are passing the item id which we want to remove,
//and we are filtering the items of cart , those items which donot matches with the item to be removed id ,
//only those items will be present in the cart
