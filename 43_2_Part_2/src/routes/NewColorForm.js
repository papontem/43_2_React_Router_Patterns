// NewColorForm.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// component to display form to add a new color to colors list
function NewColorForm(props) {
	const { colorList } = props;
	console.log("Color List:", colorList);

	const { addColor } = props;
	// console.log("addColor:", addColor);

    const history = useHistory()
    console.log("history:", history);

	// State for form data
	// width, height, and background color for a new box.
	const [newColorFormData, setNewColorFormData] = useState({});

	// Event handler for form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewColorFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleColorNameChange = (e) => {
		handleChange(e);
	};
	const handleColorChange = (e) => {
		handleChange(e);
	};

	// Event handler for form submission
	const handleColorSubmit = (e) => {
		e.preventDefault();

		// console.log("Form submitted:", newColorFormData);
		addColor(newColorFormData);

		// Clear input values after form submission
		setNewColorFormData({
			name: "",
			hexVal: "",
		});

		// Now step 4 As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.

        // redirect to colors
        history.push("/colors")
	};
	return (
		<div className="NewColorForm-Wrapper">
			<h2>Color Form:</h2>
			<form className="NewColorForm">
				<label className="ColorForm-Label">
					Color Name:
					<input
						className="ColorForm-Input"
						type="text"
						name="name"
						value={newColorFormData.name}
						onChange={handleColorNameChange}
						required
					/>
				</label>
				<label className="ColorForm-Label">
					Select Color:
					<input
						className="ColorForm-Input"
						type="color"
						name="hexVal"
						value={newColorFormData.hexVal}
						onChange={handleColorChange}
						required
					/>
				</label>
				<button
					className="NewColorForm-btn"
					onClick={handleColorSubmit}
					type="submit">
					Add Color
				</button>
			</form>
		</div>
	);
}

export default NewColorForm;
