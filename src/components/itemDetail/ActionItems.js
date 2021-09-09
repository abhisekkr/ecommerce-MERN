import React from "react";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

function ActionItems({ product }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const addItemToCart = () => {
		dispatch(addToCart(product.id));
		history.push("/cart");
	};

	const buyNow = async () => {
		let response = await payUsingPaytm({ amount: 500, email: "abhi@test.com" });

		let information = {
			action: "https://securegw-stage.paytm.in/order/process",
			params: response,
		};

		post(information);
	};

	return (
		<div className="pt-10 pb-20 pl-10 md:pl-20">
			<img className="" src={product.detailUrl} alt="" />
			<button
				onClick={() => addItemToCart()}
				className="bg-flioBtnYlow w-2/5 mt-10 mr-5 p-4 rounded-md text-white font-semibold">
				ADD TO CART
			</button>
			<button
				onClick={() => buyNow()}
				className="bg-flipBtnOrng  w-2/5 mt-10 p-4 rounded-md text-white font-semibold">
				BUY NOW
			</button>
		</div>
	);
}

export default ActionItems;

//we use Link tag when , we want to navigate to another page through nav buttons or links or text.

//The function buyNow will call the payment API , as it will get the data from an asynchronus call, so this function
//also need to be an asynchronus function
//ehatever data we get after calling the API , will be stored in response
