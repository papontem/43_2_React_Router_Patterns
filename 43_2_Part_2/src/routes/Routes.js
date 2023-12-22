// Routes.js

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";

function Routes(props) {
	const { colors } = props;
	return (
		<Switch>
			<Route exact path="/colors">
				<ColorList colors={colors} />
			</Route>
			<Route exact path="/colors/:colorName">
				<Color colors={colors}/>
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
}

export default Routes;
