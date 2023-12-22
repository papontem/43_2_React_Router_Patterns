// App.js

import React from "react";
import NavBar from "./navbar/NavBar";
import Routes from "./routes/Routes";
// import Routes404 from "./routes/Routes404";
// import RoutesNo404 from "./routes/RoutesNo404";
// import RoutesNoSwitch from "./routes/RoutesNoSwitch";
import { BrowserRouter } from "react-router-dom";

// import {} from "";

function App(props) {
  const {dogs} = props;
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

// PART 1 complete
// - /dogs is the homepage and shows all FOUR* dogs
// - Clicking on a dog from the homepage takes you to that dog’s route. 
//    For example, clicking on Whiskey will take you to /dogs/whiskey.
// - every other endpoint not listed should redirect you to /dogs. 
// Exercise provided default props
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      imgSrc: "doggy_pics/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      imgSrc: "doggy_pics/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      imgSrc: "doggy_pics/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      imgSrc: "doggy_pics/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
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
