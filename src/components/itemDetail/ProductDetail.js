import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { TagIcon, StarIcon } from "@heroicons/react/solid";

//components
import ActionItems from "./ActionItems";
import ItemTable from "./ItemTable";

function ProductDetail({ match }) {
	const { product } = useSelector((state) => state.getProductDetails);

	const dispatch = useDispatch();

	useEffect(() => {
		if (product && match.params.id !== product.id)
			dispatch(getProductDetails(match.params.id));
	}, [dispatch, product, match]);

	const fassured =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

	return (
		<div className="bg-gray-100 ">
			{product && Object.keys(product).length && (
				<div className="mx-10  bg-white flex flex-wrap ">
					<div className=" flex md:w-2/5 ">
						<ActionItems product={product} />
					</div>
					<div className="mt-10 flex flex-col pl-4 md:pl-10 md:w-3/5">
						<p className="text-gray-400 font-semibold mb-2">
							{product.title.shortTitle}
						</p>
						<p className="text-lg mb-2">{product.title.longTitle}</p>
						<p className="text-sm text-green-600 font-semibold mb-2">
							Special Price
						</p>

						<div className="flex space-x-3 mb-4">
							<p className=" text-3xl font-semi-bold self-center">
								₹{product.price.cost}
							</p>
							<p className="self-center text-gray-500 line-through">
								₹{product.price.mrp}
							</p>
							<p className="self-center text-green-600 font-semibold">
								{product.price.discount} off
							</p>
						</div>
						<p className="flex text-gray-500 mb-5">
							{" "}
							<span className="flex bg-green-600 rounded-full text-white font-semibold p-1 text-sm mr-2">
								4.1
								<StarIcon className="h-4 self-center pl-1" />
							</span>
							8 Ratings & 23 Reviews
							<img className="h-4 self-center ml-3" src={fassured} alt="" />
						</p>
						<h2 className="font-semibold mb-3">Available Offers</h2>

						<div className="">
							<p className="flex mb-1 text-sm">
								<TagIcon className="h-5 text-green-600 self-center mr-2" />
								<span className="font-semibold mr-1">Special Price</span> Get
								extra 10% off (price inclusive of discount)
							</p>
							<p className="flex mb-1 text-sm">
								<TagIcon className="h-5 text-green-600 self-center mr-2" />
								<span className="font-semibold mr-1">Combo offer</span> Buy 2
								items save 5% , Buy 3 or more save 10%
							</p>
							<p className="flex mb-1 text-sm">
								<TagIcon className="h-5 text-green-600 self-center mr-2" />
								<span className="font-semibold mr-1">Bank offer</span> 5%
								Unlimited Cashback on Flipkart Axis Bank Credit card
							</p>
							<p className="flex mb-1 text-sm">
								<TagIcon className="h-5 text-green-600 self-center mr-2" />
								<span className="font-semibold mr-1">Bank offer</span> Flat ₹
								100 off on first Flipkart Pay Later order of ₹500 and above
							</p>

							<p className="text-blue-500 font-semibold text-sm cursor-pointer">
								+5 more offers
							</p>
						</div>
						<ItemTable product={product} />
					</div>
				</div>
			)}
		</div>
	);
}

export default ProductDetail;

//Here we are calling the API
//inside getProductsDetails we have product , so we are fetching that product.
//we are calling the API from inside useEffect using dispatch and passing the product Id
//match gives us access to params of URL

//In react the return block gets called first and the useEffect block gets called after that
