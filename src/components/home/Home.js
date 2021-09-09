import React, { useEffect } from "react";
import BannerCarousel from "./BannerCarousel";
import MidSection from "./MidSection";
import NavBar from "./NavBar";
import ProductCarousel from "./ProductCarousel";
// import { products } from "../../constants/data";

import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
function Home() {
	const getProducts = useSelector((state) => state.getProducts);
	const { products } = getProducts;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div>
			<NavBar />
			<BannerCarousel />
			<div className="my-2 mx-2 ">
				<ProductCarousel ad={true} timer={true} products={products} />
				<ProductCarousel ad={false} timer={false} products={products} />
				<MidSection />
				<ProductCarousel ad={false} timer={false} products={products} />
				<ProductCarousel ad={false} timer={false} products={products} />
				<ProductCarousel ad={false} timer={false} products={products} />
			</div>
		</div>
	);
}

export default Home;

//Here we will have to bring the products out from the getProducts of store
//so at first we have to call the getProducts then we will get products
//the getProducts will come from productActions.js file

// inside useSelector we have to mention which function we want to call , and by help of state we call easily call
// state.getProducts

// const getProducts = useSelector(state => state.getProducts)
// const {products} = getProducts
//																				OR
//const { products } = useSelector((state) => state.getProducts);

//As we get getProducts , we have a products array inside of that , so instead of passing the whole data inside of getProducts
//and then get the products array , We can directly destructure products in place of getProducts

//so we have set everything like call the getProducts and get the product inside of it , BUT we havent mentioned when the function
//will get called , we want as soon our Home component mounts , simulteneously we want our function to be also called,
//so we will use useEffect

//in useEffect we are passing dispatch isnide the array, as soon as we call the function of useSelector , the dispatch will
//get changed and as dispatch changes the useEffect will get called , and as soon useEffect get called we want to dispatch getProducts

//so as soon as useEffect get called , it will call the listProducts , and that would further call the API directly and inside //listProducts it will dispatch the event , which is inside try block and that will go to reducer, and from reducer it will return the data

//as soon as useEffect gets called , it will call the listProducts and listProducts will further call the API
//and from listProducts it will dispatch an event , which will go inside productReducer and there it will match it is
//product success or product fail and will return data accordingly, and whatever data is returned is sent to store and
//using that data in our home component
