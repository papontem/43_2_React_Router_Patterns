// ColorList.js
import { Link, useParams } from "react-router-dom";

function ColorList(props) {
	const { colors } = props;
	console.log("ColorList:", colors);

	const { colorName } = useParams();
	console.log("Viewing Color:", colorName);

	// Find the dog object that matches the colorName parameter
	const selectedColor = colors.find((color) => color.name.toLowerCase() === colorName);
	console.log("selected Color:", selectedColor);
	return (
		<div className="ColorList">
			<h1>ColorList Homepage</h1>
			<ul>
				{colors.map((color) => (
					<li key={color.name}>
						<Link exact to={`/colors/${color.name.toLowerCase()}`}>
							{color.name.toLowerCase()}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ColorList;

// function Dogs(props) {
// 	const { dogs } = props;
// 	console.log("Dogs:", dogs);

// 	const { dogName } = useParams();
// 	console.log("Viewing Dog:", dogName);

// 	// Find the dog object that matches the dogName parameter
// 	const selectedDog = dogs.find((dog) => dog.name.toLowerCase() === dogName);
// 	console.log("selected Dog:", selectedDog);
// 	return (
// 		<div className="Dogs">
// 			<h1>Dogs Homepage</h1>
// 			<ul>
// 				{dogs.map((dog) => (
// 					<li key={dog.name}>
// 						<Link exact to={`/dogs/${dog.name.toLowerCase()}`}>
// 							{dog.name.toLowerCase()}
// 						</Link>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default Dogs;
