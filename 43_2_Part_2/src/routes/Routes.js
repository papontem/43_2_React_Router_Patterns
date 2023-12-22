// Routes.js

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList"
import Color from "./Color"


function Routes(props) {
	
	return (
		<Switch>
			<Route exact path="/colors">
				<ColorList />
			</Route>
			<Route exact path="/colors/:colorName">
				<Color />
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
}

export default Routes;
