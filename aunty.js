/**
 * JavaScript Comparison Operators
 *
 * >   : Greater than
 * <   : Less than
 * ==  : Equal (compares only value)
 * === : Strict equal (compares value and data type)
 * >=  : Greater than or equal
 * <=  : Less than or equal
 * !=  : Not equal (compares only value)
 * !== : Strict not equal (compares value and data type)
 *
 * Logical Operators
 * && : AND (both conditions must be true)
 * || : OR (at least one condition must be true)
 */

const a = 10;
const b = 7;

// Compare two numbers
console.log(a > b);     // true  → 10 is greater than 7
console.log(a < b);     // false → 10 is not less than 7
console.log(a === b);   // false → 10 and 7 are not equal
console.log(a >= b);    // true  → 10 is greater than or equal to 7
console.log(a <= b);    // false → 10 is not less than or equal to 7
console.log(a !== b);   // true  → 10 and 7 are different

// Extra examples
console.log(5 == "5");   // true  (only values are compared)
console.log(5 === "5");  // false (number !== string)

console.log(5 != "5");   // false (values are equal)
console.log(5 !== "5");  // true  (different data types)

// Logical AND (&&)
console.log(a > 5 && b > 5); // true (both conditions are true)

// Logical OR (||)
console.log(a < 5 || b > 5); // true (one condition is true)