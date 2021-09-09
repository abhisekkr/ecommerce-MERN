import React from "react";

function ItemTable({ product }) {
	const date = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
	const sellerURL =
		"https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

	return (
		<div>
			<table className="mt-8 max-w-2xl mb-10 border-separate table-auto">
				<tbody>
					<tr>
						<td className=" text-gray-500">Delivery :</td>
						<td className="font-semibold ">
							{date.toDateString()}
							<span className="border-r-2 pl-2" />
							<span className="pl-2 text-green-600">
								Free <span className="text-gray-500 line-through">₹40</span>
							</span>
						</td>
					</tr>

					<tr className="">
						<td className=" pt-3 text-gray-500">Warranty :</td>
						<td className="pt-3 text-sm">No Warranty</td>
					</tr>

					<tr className="">
						<td className="pt-4 text-gray-500 align-baseline">Seller :</td>
						<td className="pt-4">
							<span className="text-blue-600 font-semibold">SuperComNet</span>
							<p className="text-sm pt-2">GST invoice Available</p>
							<p className="text-sm pt-2">15 Days Return Policy</p>
							<p className="text-sm pt-2">
								View more sellers starting from ₹300
							</p>
						</td>
					</tr>

					<tr>
						<td className="pt-3 " colspan={2}>
							<img className="w-96" src={sellerURL} alt="" />
						</td>
					</tr>

					<tr>
						<td className=" pt-3 text-gray-500 align-baseline">
							Description :
						</td>
						<td colSpan={2} className="pt-3 text-sm leading-relaxed max-w-lg">
							{product.description}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ItemTable;
