// Dogs.js
import { Link, useParams } from "react-router-dom";

function Dogs(props) {
	const { dogs } = props;
	console.log("Dogs:", dogs);

	const { dogName } = useParams();
	console.log("Viewing Dog:", dogName);

	// Find the dog object that matches the dogName parameter
	const selectedDog = dogs.find((dog) => dog.name.toLowerCase() === dogName);
	console.log("selected Dog:", selectedDog);
	return (
		<>
			<h1>Dogs Homepage</h1>
			<ul>
				{dogs.map((dog) => (
					<li key={dog.name}>
						<Link exact to={`/dogs/${dog.name.toLowerCase()}`}>
							{dog.name.toLowerCase()}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Dogs;
