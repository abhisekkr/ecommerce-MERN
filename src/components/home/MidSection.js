import React from "react";
import { ImageURL } from "../../constants/data";

function MidSection() {
	return (
		<div className="flex shadow-xl mb-2 px-2 py-2 ">
			<div className="flex w-3/3 md:w-1/3 space-x-1 object-center">
				{ImageURL.map((image) => (
					<img src={image} alt="" />
				))}
			</div>
		</div>
	);
}

export default MidSection;
