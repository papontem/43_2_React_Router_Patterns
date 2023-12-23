// App.js

import React, { useState } from "react";
import NavBar from "./navbar/NavBar";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// import {} from "";

function App(props) {

	const { colors } = props;
	// console.log("Colors:",colors);
	
	// give each of the colors an id
	let newColors = colors.map((color)=>{
		let newColor = { ...color, id: uuidv4() };
		return newColor;
	})

	const [colorList, setColorList] = useState(newColors);
	console.log("Color List:",colorList);

	

	// Function to delete a color by ID
	// const deleteColor = (colorID) => {
	// 	setColorList((prevColorList) =>
	// 		prevColorList.filter((color) => color.id !== colorID)
	// 	);
	// };

	// map iteration of current colorList being displayed
	// const renderColorList = () => {
	// 	return (
	// 		<ul className="Colorlist-list">
	// 			{colorList.map((color) => (
	// 				<li>
	// 					{color.name}
	// 					{/* <Color
	// 					key={color.id}
	// 					name={color.name}
	// 					hexVal={color.hexVal}
	// 					deleteColor={() => deleteColor(color.id)}
	// 					></Color> */}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// };
	// end renderColorList

	/** Add new color object to list of colorList */
	const addColor = (color) => {
		let newColor = { ...color, id: uuidv4() };
		setColorList((colorList) => [...colorList, newColor]);
	};
	// end addColor

	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes colorList={colorList} addColor={addColor} />
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
	colors: [
		{
			name: "Blue",
			hexVal: "#0000FF",
		},
		{
			name: "Green",
			hexVal: "#00FF00",
		},
		{
			name: "Red",
			hexVal: "#FF0000",
		},
		{
			name: "White",
			hexVal: "#FFFFFF",
		},
		{
			name: "Black",
			hexVal: "#000000",
		},
	],
};

export default App;
