import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { useHistory } from "react-router-dom";

function ProductCarousel({ ad, timer, products }) {
	const history = useHistory();
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	const renderer = ({ hours, minutes, seconds }) => {
		return (
			<span>
				{hours} : {minutes} : {seconds} Left
			</span>
		);
	};
	return (
		<div className=" flex shadow-xl mb-2">
			<div className=" flex flex-col w-5/6 flex-grow">
				<div className="flex bg-white py-3 px-5  justify-between items-center">
					<div className="flex items-center">
						<h2 className="text-2xl font-semibold">Deals of the Day</h2>
						{timer && (
							<>
								<img
									className="h-5 px-5 mt-1"
									src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
									alt=""
								/>
								<Countdown date={Date.now() + 43200000} renderer={renderer} />
							</>
						)}
					</div>
					<button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-sm">
						VIEW ALL
					</button>
				</div>
				<div className="border-b-2 ml-2 mr-2" />
				<div className="py-2">
					<Carousel responsive={responsive}>
						{products.map((product) => (
							<div
								onClick={() => history.push(`/product/${product.id}`)}
								className="flex">
								<div className=" flex flex-col px-5 py-5 cursor-pointer ">
									<img className="h-40 self-center" src={product.url} alt="" />
									<p className="self-center pt-5 pb-1 text-smeibold">
										{product.title.shortTitle}
									</p>
									<p className="self-center pb-1 text-green-800 text-xs">
										{product.discount}
									</p>
									<p className="self-center pb-1 text-gray-400 text-sm">
										{product.tagline}
									</p>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			</div>
			{ad && (
				<div className="flex hidden md:inline">
					<img
						className="p-1 bg-white object-fill"
						src="https://rukminim1.flixcart.com/flap/464/708/image/1e57a8e8c0af9e9a.jpg?q=70"
						alt=""
					/>
				</div>
			)}
		</div>
	);
}

export default ProductCarousel;
