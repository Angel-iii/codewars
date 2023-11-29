function firstNonConsecutive(arr) {
	for (let i = 1; i < arr.length; i++) {
			if (arr[i] !== arr[i - 1] + 1) {
					return arr[i];
			}
	}
	return null;
}

// Test cases
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // Output: 6
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7]));    // Output: null
console.log(firstNonConsecutive([]));                       // Output: null
console.log(firstNonConsecutive([5]));                      // Output: null
