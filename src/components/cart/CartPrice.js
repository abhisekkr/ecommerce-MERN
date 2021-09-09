import React, { useState, useEffect } from "react";

function CartPrice({ cartItems }) {
	const [price, setPrice] = useState(0);
	const [discount, setDiscount] = useState(0);

	useEffect(() => {
		totalAmount();
	}, [cartItems]);

	const totalAmount = () => {
		let price = 0,
			discount = 0;
		cartItems.map((item) => {
			price += item.price.mrp;
			discount += item.price.mrp - item.price.cost;
		});
		setPrice(price);
		setDiscount(discount);
	};

	return (
		<div className="md:ml-4 ml-14 w-96 border">
			<h2 className="py-4 px-6 font-semibold  text-gray-500 border-b">
				PRICE DETAILS
			</h2>
			<div className="mt-5 px-6">
				<p className="mb-7 ">
					Price ({cartItems.length})
					<span className="float-right">₹{price}</span>
				</p>
				<p className="mb-7">
					Discount
					<span className="text-green-600 float-right">-₹{discount}</span>
				</p>
				<p className="mb-7">
					Delivery Charges
					<span className="text-green-600 float-right">FREE</span>
				</p>
				<p className=" py-5 border-t-2 border-b-2 border-dotted font-semibold text-lg">
					Total Amount<span className=" float-right">₹{price - discount}</span>
				</p>
				<p className="mt-1 text-green-600 font-semibold ">
					You will save ₹{discount} on this order
				</p>
			</div>
		</div>
	);
}

export default CartPrice;
