// App.js

import React from "react";
import NavBar from "./navbar/NavBar";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
// import {} from "";

function App(props) {
	const { colors } = props;
	// console.log("Colors:",colors);
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes colors={colors} />
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
	colors: [
		{
			name: "Red",
			rgbVal: [255, 0, 0],
		},
		{
			name: "Green",
			rgbVal: [0,255, 0],
		},
		{
			name: "Blue",
			rgbVal: [0, 0, 255],
		},
		{
			name: "White",
			rgbVal: [255, 255, 255],
		},
		{
			name: "Black",
			rgbVal: [0, 0, 0],
		},
	],
};

export default App;
