function findMultiples(integer, limit) {
	const multiples = [];

	for (let i = integer; i <= limit; i += integer) {
			multiples.push(i);
	}

	return multiples;
}

// Example usage:
console.log(findMultiples(2, 6)); // Output: [2, 4, 6]
