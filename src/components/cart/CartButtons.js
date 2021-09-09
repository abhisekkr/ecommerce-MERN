import React, { useState } from "react";

function CartButtons() {
	const [counter, setCounter] = useState(1);
	return (
		<div className="mt-3">
			<button
				onClick={() => setCounter(counter - 1)}
				disabled={counter === 1}
				className="bg-gray-200 px-2 py-1 rounded-md font-semibold md:mr-2">
				-
			</button>
			<button className="border px-2 py-1 rounded-md md:mr-2">{counter}</button>
			<button
				onClick={() => setCounter(counter + 1)}
				className="bg-gray-200 px-2 py-1 rounded-md font-semibold">
				+
			</button>
		</div>
	);
}

export default CartButtons;
