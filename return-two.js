function twoHighest(arr) {
	// Remove duplicate values and sort the array in descending order
	const sortedArr = [...new Set(arr)].sort((a, b) => b - a);

	// Return the first two elements (or the entire array if it has less than 2 elements)
	return sortedArr.slice(0, 2);
}

// Examples
console.log(twoHighest([4, 10, 10, 9])); // Output: [10, 9]
console.log(twoHighest([1, 1, 1]));       // Output: [1]
console.log(twoHighest([]));              // Output: []
