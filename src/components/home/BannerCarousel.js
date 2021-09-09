import React from "react";
import { bannerData } from "../../constants/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function BannerCarousel() {
	return (
		<div className="my-2 mx-2 bg-gray-400 cursor-pointer shadow-xl">
			<Carousel
				showStatus={false}
				showThumbs={false}
				showIndicators={false}
				autoPlay={true}
				interval={3000}
				infiniteLoop={true}
				dynamicHeight={true}
				className="h-72">
				{bannerData.map((data) => (
					<div>
						<img
							className="h-72 object-cover object-center"
							src={data}
							alt=""
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default BannerCarousel;
