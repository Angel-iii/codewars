function twoSort(s) {
	// Sort the array alphabetically
	s.sort();

	// Take the first string from the sorted array
	const firstString = s[0];

	// Join the characters of the first string with "***" in between
	const result = firstString.split('').join('***');

	return result;
}

// Example usage:
const stringsArray = ["banana", "apple", "orange", "grape"];
console.log(twoSort(stringsArray)); // Output: 'a***p***p***l***e'
