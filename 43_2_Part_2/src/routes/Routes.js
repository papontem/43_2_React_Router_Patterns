// Routes.js

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function Routes(props) {
	const { colorList, addColor } = props;
	console.log("In Routes, Color List:", colorList);

	/* Step 5, As a user, if I try to navigate to a color page that does not exist (eg, /colors/blargh), I am redirected to the colors index page. */
	// created a callback to check for me if color is real
	const colorExists = (colorName) => {
		// check if the color exists in the colorList
		return colorList.some((color) => color.name.toLowerCase() === colorName.toLowerCase());
	  };

	return (
		<Switch>
			<Route exact path="/colors">
				<ColorList colorList={colorList} />
			</Route>
			<Route exact path="/colors/new">
				<NewColorForm colorList={colorList} addColor={addColor} />
			</Route>

			<Route exact path="/colors/:colorName">
				{({ match }) => {
					// console.log("Match: ",match); 
					const { colorName } = match.params;

					// check if the colorName param exists in our coloList and if it does not redirect to colors
					if (!colorExists(colorName)) {
						return <Redirect to="/colors" />;
					}
					// else render the color
					return <Color colorList={colorList} />;
				}}
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
}

export default Routes;
