// App.js

import React from "react";
import NavBar from "./navbar/NavBar";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
// import {} from "";

function App(props) {
	const { dogs } = props;
	// console.log("Dogs:",dogs);
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes dogs={dogs} />
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
	dogs: [
		{
			name: "Whiskey",
			age: 5,
			imgSrc: "doggy_pics/whiskey.jpg",
			facts: [
				"Whiskey loves eating popcorn.",
				"Whiskey is a terrible guard dog.",
				"Whiskey wants to cuddle with you!",
			],
		},
		{
			name: "Duke",
			age: 3,
			imgSrc: "doggy_pics/duke.jpg",
			facts: [
				"Duke believes that ball is life.",
				"Duke likes snow.",
				"Duke enjoys pawing other dogs.",
			],
		},
		{
			name: "Perry",
			age: 4,
			imgSrc: "doggy_pics/perry.jpg",
			facts: [
				"Perry loves all humans.",
				"Perry demolishes all snacks.",
				"Perry hates the rain.",
			],
		},
		{
			name: "Tubby",
			age: 4,
			imgSrc: "doggy_pics/tubby.jpg",
			facts: [
				"Tubby is really stupid.",
				"Tubby does not like walks.",
				"Angelina used to hate Tubby, but claims not to anymore.",
			],
		},
	],
};

export default App;
