// ColorList.js
import { Link } from "react-router-dom";

function ColorList(props) {
	const { colors } = props;
	console.log("ColorList:", colors);

	const handleColorChange = () => {};
	const handleColorSubmit = () => {};
	return (
		<div className="Colors-Wrapper">
			<h1>Colors Homepage</h1>
			<div className="ColorForm">
				<h2>Color Form:</h2>
				<form>
					<label className="ColorForm-Label">
						Select Color:
						<input
							className="ColorForm-Input"
							type="color"
							onChange={handleColorChange}
						/>
					</label>
					<button onClick={handleColorSubmit}> Add Color</button>
				</form>
			</div>
			<div className="ColorList">
				<h2>Color List:</h2>
				<ul className="ColorList-list">
					{colors.map((color) => (
						<li key={color.name}>
							<Link exact to={`/colors/${color.name.toLowerCase()}`}>
								{color.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
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
