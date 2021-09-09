import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Profile = ({ account, setAccount }) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	const handleClick = (event) => {
		setOpen(event.currentTarget);
	};

	const logout = () => {
		setAccount("");
	};
	return (
		<div>
			<div onClick={handleClick} className="flex text-white cursor-pointer">
				<UserIcon className="h-5 mr-1" />
				<p className="font-semibold">{account}</p>
			</div>
			<Menu
				className="mt-10"
				anchorEl={open}
				open={Boolean(open)}
				onClose={handleClose}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose();
						logout();
					}}>
					Logout
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Profile;
