// Counting sheep

function countSheeps(sheep) {
	if (!sheep || !Array.isArray(sheep)) {
			// Handle bad values like null/undefined or non-array inputs
			return 0;
	}

	// Use the filter method to count the number of true values in the array
	const presentSheep = sheep.filter(value => value === true);

	// Return the count of true values
	return presentSheep.length;
}

// Example usage:
const sheepArray = [
	true, true, true, false,
	true, true, true, true,
	true, false, true, false,
	true, false, false, true,
	true, true, true, true,
	false, false, true, true
];

console.log(countSheeps(sheepArray)); // Output: 17


