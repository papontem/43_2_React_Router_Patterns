// DogDetails.js
import { useParams } from "react-router-dom";
function DogDetails(props) {
	const { dogs } = props;
	console.log("Dogs:", dogs);

	const { dogName } = useParams();
	console.log("Viewing Dog:", dogName);

	// Find the dog object that matches the dogName parameter
	const selectedDog = dogs.find((dog) => dog.name.toLowerCase() === dogName);
	console.log("selected Dog:", selectedDog);
	return (
		<div>
			<h2>{selectedDog.name}</h2>
			<p>Age: {selectedDog.age}</p>
			<img src={`/${selectedDog.imgSrc}`} alt={selectedDog.name} />
			<ul>
				{selectedDog.facts.map((fact, index) => (
					<li key={index}>{fact}</li>
				))}
			</ul>
		</div>
	);
}

export default DogDetails;
