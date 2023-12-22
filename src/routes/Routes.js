// Routes.js

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs"
import DogDetails from "./DogDetails"
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import BlogHome from "./BlogHome";
// import Post from "./Post";

function Routes(props) {
	const {dogs} = props;
	// console.log(dogs);
	return (
		<Switch>
			<Route exact path="/dogs">
				<Dogs dogs={dogs}/>
			</Route>
			<Route exact path="/dogs/:dogName">
				<DogDetails dogs={dogs}/>
			</Route>
			{/* <Route exact path="/about">
				<About />
			</Route>
			<Route exact path="/contact">
				<Contact />
			</Route>
			<Route exact path="/blog/:slug">
				<Post />
			</Route>
			<Route exact path="/blog">
				<BlogHome />
			</Route>
			<Route exact path="/">
				<Home />
			</Route> */}
			<Redirect to="/dogs" />
		</Switch>
	);
}

export default Routes;
