/**
 * ==========================================
 * JavaScript if...else Statement
 * ==========================================
 *
 * The `if...else` statement is used to make
 * decisions in a program based on a condition.
 *
 * If the condition is true:
 *      Execute the `if` block.
 *
 * Otherwise:
 *      Execute the `else` block.
 *
 * Syntax:
 *
 * if (condition) {
 *     // Code executes when the condition is true
 * } else {
 *     // Code executes when the condition is false
 * }
 */

// Example 1
const rickshawFare = 200;

if (rickshawFare < 50) {
    console.log("Take the rickshaw.");
    console.log("Drive carefully.");
} else {
    console.log("Walking is a healthy option.");
}

// Example 2
const x = 200;
const y = 200;

if (x !== y) {
    const z = x + y;
    console.log("Value of z:", z);
} else {
    console.log("Both values are equal.");
}

/**
 * ==========================================
 * Notes
 * ==========================================
 *
 * ✔ `if` checks whether a condition is true.
 *
 * ✔ `else` executes only when the `if`
 *   condition is false.
 *
 * ✔ A condition always returns:
 *      • true
 *      • false
 *
 * ✔ Only one block is executed:
 *      • if block
 *      • else block
 *
 * ✔ Common comparison operators:
 *      >    Greater than
 *      <    Less than
 *      >=   Greater than or equal to
 *      <=   Less than or equal to
 *      ===  Strict equality
 *      !==  Strict inequality
 *
 * Best Practices:
 * ✔ Use meaningful variable names.
 * ✔ Prefer `===` and `!==` over `==` and `!=`.
 * ✔ Keep conditional blocks simple and readable.
 */