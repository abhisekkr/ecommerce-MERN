import React from "react";
import { navData } from "../../constants/data";

function NavBar() {
	return (
		<div className="flex py-3  space-x-1 md:space-x-3 justify-evenly items-center shadow-md">
			{navData.map((data) => (
				<div className=" flex flex-col cursor-pointer">
					<img
						className="h-10 w-10 md:h-16 md:w-16 self-center"
						src={data.url}
						alt=""
					/>
					<p className="text-sm self-center">{data.text}</p>
				</div>
			))}
		</div>
	);
}

export default NavBar;
