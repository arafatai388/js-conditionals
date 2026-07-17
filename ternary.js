/**
 * ==========================================
 * JavaScript Ternary Operator
 * ==========================================
 *
 * The ternary operator is a shorthand version
 * of the `if...else` statement.
 *
 * It evaluates a condition and returns one of
 * two expressions based on the result.
 *
 * Syntax:
 *
 * condition ? expressionIfTrue : expressionIfFalse;
 *
 * It is best suited for simple conditions and
 * value assignments.
 */

const age = 20;

// Using if...else
if (age >= 18) {
    console.log("Please Vote");
} else {
    console.log("Grow Up Kid");
}

// Using Ternary Operator
age >= 18
    ? console.log("Please Vote")
    : console.log("Grow Up Kid");

let price = 500;
const isLeader = true;

// Using if...else
if (isLeader) {
    price = 0;
} else {
    price = price + 100;
}

console.log("Price:", price);

// Using Ternary Operator
price = isLeader ? 0 : price + 100;

console.log("Updated Price:", price);

/**
 * ==========================================
 * Notes
 * ==========================================
 *
 * ✔ The ternary operator replaces simple
 *   `if...else` statements with a shorter syntax.
 *
 * ✔ Syntax:
 *      condition ? trueExpression : falseExpression;
 *
 * ✔ If the condition is true,
 *   the first expression is executed.
 *
 * ✔ If the condition is false,
 *   the second expression is executed.
 *
 * ✔ Best used for:
 *   • Simple decisions
 *   • Value assignments
 *   • Short conditional expressions
 *
 * ✔ Avoid using nested ternary operators,
 *   as they reduce code readability.
 *
 * Best Practices:
 * • Use `if...else` for complex logic.
 * • Use the ternary operator for concise,
 *   readable conditions.
 */