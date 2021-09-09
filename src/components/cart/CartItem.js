import React from "react";
import CartButtons from "./CartButtons";

function CartItem({ items, removeItem }) {
	const fassured =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
	const date = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);

	return (
		<div className="flex border">
			<div className="w-44 h-44 px-6 py-4">
				<img className="h-15 w-24 shadow-md" src={items.url} alt="" />
				<CartButtons />
			</div>
			<div className="">
				<div className=" flex pt-4">
					<p className="font-semibold">{items.title.longTitle}</p>
					<p className="pl-16 text-sm self-center">
						Delivery by {date.toDateString()}
					</p>
				</div>
				<p className="flex text-sm text-gray-400 pt-2">
					Seller: SuperComNet{" "}
					<img className="pl-3  h-4 self-center" src={fassured} alt="" />
				</p>
				<div className="flex space-x-3 pt-5">
					<p className="text-lg font-semibold">₹{items.price.cost}</p>
					<p className="text-gray-400 line-through text-sm self-center">
						₹{items.price.mrp}
					</p>
					<p className="text-green-700 font-semibold self-center">
						{items.price.discount} off
					</p>
				</div>
				<button className="mt-4 font-semibold   py-2 rounded-md text-md hover:text-flipBlue">
					SAVE FOR LATER
				</button>
				<button
					onClick={() => removeItem(items.id)}
					className=" ml-7 mt-4 font-semibold   py-2 rounded-md text-md hover:text-flipBlue">
					REMOVE
				</button>
			</div>
		</div>
	);
}

export default CartItem;
