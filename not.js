/**
 * ==========================================
 * JavaScript Truthy & Falsy Values
 * ==========================================
 *
 * In JavaScript, every value has an implicit
 * boolean value when used in a condition.
 *
 * A value is either:
 * • Truthy
 * • Falsy
 *
 * This allows conditions to be written
 * without explicitly comparing to `true`
 * or `false`.
 */

// Boolean value
const isLoggedIn = false;

// Preferred way
if (!isLoggedIn) {
    console.log("Please log in.");
}

// ------------------------------------------

// Number
const number = -1000;

// Any non-zero number is truthy
if (number) {
    console.log("Number is truthy.");
}

// ------------------------------------------

// Empty string
const name = "";

if (name) {
    console.log("Name exists.");
} else {
    console.log("Name is empty.");
}

/**
 * ==========================================
 * Truthy Values
 * ==========================================
 *
 * ✔ true
 * ✔ Any non-zero number
 * ✔ Positive numbers
 * ✔ Negative numbers
 * ✔ Non-empty strings
 * ✔ Empty arrays []
 * ✔ Empty objects {}
 * ✔ Functions
 *
 * ==========================================
 * Falsy Values
 * ==========================================
 *
 * ✖ false
 * ✖ 0
 * ✖ -0
 * ✖ 0n (BigInt zero)
 * ✖ "" (Empty string)
 * ✖ '' (Empty string)
 * ✖ `` (Template literal with no characters)
 * ✖ null
 * ✖ undefined
 * ✖ NaN
 *
 * ==========================================
 * Best Practices
 * ==========================================
 *
 * ✔ Instead of:
 *      if (isLoggedIn === true)
 *
 *   Write:
 *      if (isLoggedIn)
 *
 * ✔ Instead of:
 *      if (isLoggedIn === false)
 *
 *   Write:
 *      if (!isLoggedIn)
 *
 * ✔ Let JavaScript evaluate truthy and falsy
 *   values naturally whenever possible.
 */