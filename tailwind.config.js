const colors = require("tailwindcss/colors");
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				flipBlue: "#2874f0",
				flipBtnOrng: "#fb641b",
				flioBtnYlow: "#ff9f00",
				flipFtr: "#f1f3f6",
			},
		},
		zIndex: {
			25: 25,
			50: 50,
			75: 75,
			100: 100,
			auto: "auto",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
