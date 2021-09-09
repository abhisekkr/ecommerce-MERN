import React from "react";
import { useHistory } from "react-router-dom";

function EmptyCart() {
	const history = useHistory();
	const emptyCart =
		"https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

	return (
		<div className="flex my-10 mx-14 md:mx-36 border h-96  md:w-4/5 shadow-md">
			<div className=" flex flex-col items-center w-full">
				<img className="h-56  mt-5 mb-5" src={emptyCart} alt="" />
				<h2 className="">Missing Cart items ?</h2>
				<button
					onClick={() => history.push("/")}
					className=" mt-3 bg-flipBtnOrng text-white py-2 px-3 rounded-md font-semibold">
					SHOP NOW
				</button>
			</div>
		</div>
	);
}

export default EmptyCart;
