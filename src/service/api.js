import axios from "axios";

const url = "https://apiecomme.herokuapp.com";

export const authenticateSignup = async (user) => {
	try {
		return await axios.post(`${url}/signup`, user);
	} catch (error) {
		console.log("Error while calling SignUp API", error);
	}
};

export const authenticateLogin = async (user) => {
	try {
		return await axios.post(`${url}/login`, user);
	} catch (error) {
		console.log("Error while calling Login API", error);
	}
};

export const payUsingPaytm = async (data) => {
	try {
		let response = await axios.post(`${url}/payment`, data);
		return response.data;
	} catch (error) {
		console.log("Error while calling paytm API", error);
	}
};

//axios takes two param , one is our backend URL and the second one , the variable where we will get data from Frontend

//when the request matches with/signup then the above declared function will work

//we have many methods to call any api such as request , fetchAPI or by library axios
//but try to not use request method because its depricated

//In post API , we also send data
