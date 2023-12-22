// App.js

import React from "react";
import NavBar from "./navbar/NavBar";
import Routes from "./routes/Routes";
// import Routes404 from "./routes/Routes404";
// import RoutesNo404 from "./routes/RoutesNo404";
// import RoutesNoSwitch from "./routes/RoutesNoSwitch";
import { BrowserRouter } from "react-router-dom";
// import {} from "";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes />
			</BrowserRouter>
		</div>
	);
}

export default App;

// ROUTED DEMO CODE
// import React from "react";

// import Home from "./Home";
// import Eat from "./Eat";
// import Drink from "./Drink";
// import NavBar from "./NavBar";

// import { BrowserRouter, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Route exact path="/drink">
//           <Drink />
//         </Route>
//         <Route exact path="/eat">
//           <Eat />
//         </Route>
//         <Route exact path="/">
//           <Home />
//         </Route>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// // URL PARAMETERS
// import React from "react";
// import NavBar from "./NavBar";
// import { Route, BrowserRouter } from "react-router-dom";
// import Food from "./Food";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Route exact path="/food/:name">
//           <Food />
//         </Route>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
