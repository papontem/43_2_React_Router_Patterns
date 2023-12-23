// Routes.js

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function Routes(props) {
	const { colorList,addColor } = props;
	return (
		<Switch>
			<Route exact path="/colors">
				<ColorList colorList={colorList} />
			</Route>
			<Route exact path="/colors/new">
				<NewColorForm colorList={colorList} addColor={addColor}/>
			</Route>
			<Route exact path="/colors/:colorName">
				<Color colorList={colorList}/>
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
}

export default Routes;
