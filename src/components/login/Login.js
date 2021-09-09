import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { authenticateSignup, authenticateLogin } from "../../service/api.js"; //we want to call this function on click of signUp button

function Login({ open, onClose, setAccount }) {
	const [accountStatus, setAccountStatus] = useState("login");

	const signupInitialValues = {
		firstname: "",
		lastname: "",
		phone: "",
		email: "",
		password: "",
	};

	const loginInitialValues = {
		email: "",
		password: "",
	};

	const [signup, setSignup] = useState(signupInitialValues);
	const [login, setLogin] = useState(loginInitialValues);
	const [error, setError] = useState(false);

	const signupUser = async () => {
		let response = await authenticateSignup(signup);
		if (!response) return;
		onClose();
		setAccount(signup.firstname);
	};

	const loginUser = async () => {
		let response = await authenticateLogin(login);
		if (!response) {
			setError(true);
			return;
		}
		onClose();
		setAccount(login.email.substring(0, login.email.lastIndexOf("@")));
	};

	const onInputChange = (e) => {
		setSignup({ ...signup, [e.target.name]: e.target.value }); //if we need to mention object key in form of variable , then we need a square bracket
	};

	const onValueChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value });
		console.log(login);
	};

	if (!open) return null;
	return (
		<div className="flex justify-center bg-black bg-opacity-50 z-50 inset-0 fixed ">
			<div className=" flex relative md:w-3/5 h-2/3 inset-y-24 rounded-lg mx-auto">
				<div className=" flex flex-col md:w-2/5 bg-blue-700 text-white justify-between">
					{accountStatus === "login" ? (
						<div className="hidden md:inline pt-8 pl-5 pr-5">
							<h2 className="font-semibold text-3xl mb-6 mx-auto">Login</h2>
							<p className="text-sm">
								Get access to your Orders, Wishlist and Recommendations
							</p>
						</div>
					) : (
						<div className="hidden md:inline pt-8 pl-5 pr-5">
							<h2 className="font-semibold text-3xl mb-6 mx-auto">
								Looks like you're new here!
							</h2>
							<p className="text-sm">Sign up to get started</p>
						</div>
					)}
					<img
						className="hidden md:inline pb-5 w-56 mx-auto"
						src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
						alt=""
					/>
				</div>
				{accountStatus === "login" ? (
					<div className="flex flex-col  bg-white pt-8 px-4 w-96">
						<form className=" flex flex-col w-72 self-center">
							<input
								className=" outline-none border-b-2 border-blue-400 pt-4 mb-3 focus:placeholder-transparent"
								onChange={(e) => onValueChange(e)}
								name="email"
								type="email"
								placeholder="Enter Email/Mobile number"
							/>
							<input
								className=" outline-none border-b-2 border-blue-400 pt-4  focus:placeholder-transparent"
								onChange={(e) => onValueChange(e)}
								name="password"
								type="password"
								placeholder="Enter Password"
							/>
						</form>
						{error && (
							<p className="text-red-500 text-xs mb-3 pt-1 font-semibold leading-none px-8">
								INVALID CREDENTIALS
							</p>
						)}
						<p className="text-xs text-center text-gray-500 w-72 pt-4 pb-2 mt-3 self-center">
							By continuing, you agree to Flipkart's{" "}
							<span className="text-blue-600">Terms of Use</span> and {""}
							<span className="text-blue-600">Privacy Policy</span>
						</p>
						<button
							onClick={() => loginUser()}
							className="bg-blue-500 text-white w-72 p-3 mb-3 rounded-sm self-center">
							Login
						</button>
						<h2 className="text-center text-sm text-gray-500 mb-3 ">OR</h2>
						<button className="text-blue-600 bg-gray-100 p-3 mb-3 w-72 shadow-md self-center">
							Request OTP
						</button>
						<h2
							onClick={() => setAccountStatus("signUp")}
							className="text-gray-500 self-center pb-2 my-8 text-sm">
							New to Flipkart?{" "}
							<span className="cursor-pointer text-blue-600">
								Create account
							</span>
						</h2>
					</div>
				) : (
					<div className="flex flex-col  bg-white pt-8 px-4 w-96">
						<form className=" flex flex-col w-72 self-center">
							<input
								onChange={(e) => onInputChange(e)}
								className=" outline-none border-b-2 border-blue-400 pt-3 mb-3 focus:placeholder-transparent"
								name="firstname"
								type="text"
								placeholder="Enter First Name"
							/>
							<input
								onChange={(e) => onInputChange(e)}
								className=" outline-none border-b-2 border-blue-400 pt-3 mb-3 focus:placeholder-transparent"
								name="lastname"
								type="text"
								placeholder="Enter Last Name"
							/>
							<input
								onChange={(e) => onInputChange(e)}
								className=" outline-none border-b-2 border-blue-400 pt-3 mb-3 focus:placeholder-transparent"
								name="phone"
								type="tel"
								placeholder="Enter Mobile number"
							/>
							<input
								onChange={(e) => onInputChange(e)}
								className=" outline-none border-b-2 border-blue-400 pt-3 mb-3 focus:placeholder-transparent"
								name="email"
								type="email"
								placeholder="Enter Email"
							/>
							<input
								onChange={(e) => onInputChange(e)}
								className=" outline-none border-b-2 border-blue-400 pt-3 mb-3 focus:placeholder-transparent"
								name="password"
								type="password"
								placeholder="Enter Password"
							/>
						</form>
						<p className="text-xs text-center text-gray-500 w-72 pt-4 pb-2 self-center">
							By continuing, you agree to Flipkart's{" "}
							<span className="text-blue-600">Terms of Use</span> and {""}
							<span className="text-blue-600">Privacy Policy</span>
						</p>
						<button
							onClick={() => signupUser()}
							className="bg-blue-500 text-white w-72 p-3 mb-3 rounded-sm self-center">
							Sign up
						</button>
						<p
							onClick={() => setAccountStatus("login")}
							className="text-center text-sm">
							Existing User?
							<span className="text-blue-600 cursor-pointer"> Log in</span>
						</p>
					</div>
				)}
				<XIcon
					onClick={onClose}
					className="h-8 w-10 text-gray-200 cursor-pointer"
				/>
			</div>
		</div>
	);
}

export default Login;
