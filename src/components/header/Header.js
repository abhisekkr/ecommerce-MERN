import React, { useState, useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
//Component
import Login from "../login/Login.js";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

function Header() {
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const { account, setAccount } = useContext(LoginContext);

	return (
		<div>
			<div className="sticky top-0 z-50 h-14 flex justify-evenly items-center bg-blue-600 px-10 py-7">
				{/* headerLeft */}
				<div className=" flex ">
					<div className="flex flex-col items-center">
						<img
							onClick={() => history.push("/")}
							className="h-5  object-contain cursor-pointer "
							src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
							alt=""
						/>
						<p className="italic text-xs text-white cursor-pointer hover:underline">
							Explore <span className="text-yellow-300 font-bold">Plus</span>
						</p>
					</div>
					<input
						className=" ml-5 w-36 md:w-96  outline-none text-sm px-3  rounded-sm"
						type="search"
						placeholder="Search for products, brands and more"
					/>
				</div>
				{/* headerRight */}
				<div className="flex space-x-3 md:space-x-8 items-center ">
					{!account ? (
						<button
							onClick={() => setOpen(true)}
							className=" bg-white px-3 md:px-7 py-1 text-md text-blue-500 font-semibold rounded-sm">
							Login
						</button>
					) : (
						<Profile account={account} setAccount={setAccount} />
					)}
					<h4 className="hidden md:inline text-white font-semibold cursor-pointer">
						More
					</h4>
					<div
						onClick={() => history.push("/cart")}
						className="flex items-center cursor-pointer">
						<ShoppingCartIcon className="h-6 text-white " />
						<p className=" text-white font-semibold ml-1">Cart</p>
					</div>
				</div>
			</div>
			<Login
				open={open}
				setAccount={setAccount}
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}

export default Header;
