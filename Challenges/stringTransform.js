function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {
        // Length is divisible by 15: first reverse, then replace characters with ASCII codes
        return input.split('')
                    .reverse()
                    .map(char => char.charCodeAt(0))
                    .join(' ');
    } else if (length % 5 === 0) {
        // Length is divisible by 5: replace characters with ASCII codes
        return input.split('')
                    .map(char => char.charCodeAt(0))
                    .join(' ');
    } else if (length % 3 === 0) {
        // Length is divisible by 3: reverse the string
        return input.split('')
                    .reverse()
                    .join('');
    } else {
        // Default case: return the string as is
        return input;
    }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
