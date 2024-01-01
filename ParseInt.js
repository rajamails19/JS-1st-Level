


// Example 1
let num1 = parseInt("42");
console.log(num1); // Output: 42

// Example 2
let num2 = parseInt("3.14");
console.log(num2); // Output: 3

// Example 3
let num3 = parseInt("101", 2); // Parse as binary
console.log(num3); // Output: 5 (1 * 2^2 + 0 * 2^1 + 1 * 2^0)

// Example 4
let num4 = parseInt("ABC123");
console.log(num4); // Output: NaN (Not a Number)

// Example 5
let num5 = parseInt("12px");
console.log(num5); // Output: 12 (Parsing stops at the non-numeric character)

// Example 6
let num6 = parseInt("123", 8); // Parse as octal
console.log(num6); // Output: 83 (1 * 8^2 + 2 * 8^1 + 3 * 8^0)

// Example 7
let num7 = parseInt("0x1A"); // Parse as hexadecimal
console.log(num7); // Output: 26 (1 * 16^1 + 10 * 16^0)

// Example 8
let num8 = parseInt("Infinity");
console.log(num8); // Output: NaN (Infinity is not a valid number)

// Example 9
let num9 = parseInt("42 is the answer");
console.log(num9); // Output: 42 (Parsing stops at the non-numeric character)

// Example 10
let num10 = parseInt(""); // Empty string
console.log(num10); // Output: NaN (Empty string is not a valid number)
