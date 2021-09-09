import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
//components
import CartItem from "./CartItem";
import CartPrice from "./CartPrice";
import { removeFromCart } from "../../redux/actions/cartActions";
import EmptyCart from "./EmptyCart";

function Cart() {
	const { cartItems } = useSelector((state) => state.cart);

	useEffect(() => {
		console.log(cartItems);
	});

	const dispatch = useDispatch();

	const removeItem = (id) => {
		dispatch(removeFromCart(id));
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
		<>
			{cartItems.length ? (
				<div className="flex mt-5 py-8 md:px-32 bg-white flex-wrap">
					<div className="md:w-4/6">
						<h2 className="py-4 px-6 font-semibold border">
							My Cart ( {cartItems.length} )
						</h2>

						{cartItems.map((item) => (
							// <p>{item.id}</p>
							<CartItem items={item} removeItem={removeItem} />
						))}
						<div className="flex py-4 border shadow-md  w-full">
							<button
								onClick={() => buyNow()}
								className="ml-auto bg-flipBtnOrng py-3 px-8 text-white font-semibold mr-3 ">
								PLACE ORDER
							</button>
						</div>
					</div>
					<div className="">
						<CartPrice cartItems={cartItems} />
					</div>
				</div>
			) : (
				<EmptyCart />
			)}
		</>
	);
}

export default Cart;
