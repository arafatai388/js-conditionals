/**
 * ==========================================
 * JavaScript if...else if...else Statement
 * ==========================================
 *
 * The `if...else if...else` statement is used
 * to evaluate multiple conditions in sequence.
 *
 * JavaScript checks each condition from
 * top to bottom.
 *
 * - If a condition is true, its block executes.
 * - The remaining conditions are skipped.
 * - If no condition is true, the `else` block executes.
 *
 * Syntax:
 *
 * if (condition1) {
 *     // Code
 * } else if (condition2) {
 *     // Code
 * } else if (condition3) {
 *     // Code
 * } else {
 *     // Default code
 * }
 */

const marks = 45;

if (marks > 80) {
    console.log("A+");
}
else if (marks > 70) {
    console.log("B+");
}
else if (marks > 60) {
    console.log("C+");
}
else if (marks > 50) {
    console.log("D+");
}
else {
    console.log("F");
}

/**
 * ==========================================
 * Notes
 * ==========================================
 *
 * ✔ Use `if...else if...else` when there are
 *   multiple possible outcomes.
 *
 * ✔ Conditions are evaluated from top to bottom.
 *
 * ✔ As soon as one condition is true,
 *   JavaScript stops checking the remaining conditions.
 *
 * ✔ The `else` block is optional, but it is
 *   useful for handling all remaining cases.
 *
 * ✔ Arrange conditions from the most specific
 *   or highest value to the lowest value.
 *
 * Best Practices:
 * • Keep conditions clear and readable.
 * • Avoid unnecessary comparisons.
 * • Use descriptive variable names.
 */