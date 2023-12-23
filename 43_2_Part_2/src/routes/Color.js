// Color.js
import { useParams } from "react-router-dom";
import "./Color.css";

function Color(props) {
	const { colors } = props;
	console.log("Color:", colors);

	const { colorName } = useParams();
	console.log("Viewing Color:", colorName);

	// Find the color object that matches the colorName parameter
	const selectedColor = colors.find((color) => color.name.toLowerCase() === colorName);
	console.log("selected Color:", selectedColor);
	return (
		<div className="Color">
			<h2>{selectedColor.name}</h2>
		</div>
	);
}

export default Color;

// function DogDetails(props) {
// 	const { dogs } = props;
// 	console.log("Dogs:", dogs);

// 	const { dogName } = useParams();
// 	console.log("Viewing Dog:", dogName);

// 	// Find the dog object that matches the dogName parameter
// 	const selectedDog = dogs.find((dog) => dog.name.toLowerCase() === dogName);
// 	console.log("selected Dog:", selectedDog);
// 	return (
// 		<div className="DogDetails">
// 			<h2>{selectedDog.name}</h2>
// 			<p>Age: {selectedDog.age}</p>
// 			<img src={`/${selectedDog.imgSrc}`} alt={selectedDog.name} />
// 			<ul>
// 				{selectedDog.facts.map((fact, index) => (
// 					<li key={index}>{fact}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default DogDetails;
