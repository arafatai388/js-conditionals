/**
 * ==========================================
 * JavaScript Multiple Conditions
 * ==========================================
 *
 * Multiple conditions allow you to evaluate
 * more than one expression in a single decision.
 *
 * Logical Operators:
 *
 * && (AND)
 * - Returns true only if ALL conditions are true.
 *
 * || (OR)
 * - Returns true if AT LEAST ONE condition is true.
 *
 * You can also combine AND (&&) and OR (||)
 * using parentheses () to control the evaluation order.
 *
 * Syntax:
 *
 * if (condition1 && condition2) {
 *     // Executes when both conditions are true
 * }
 *
 * if (condition1 || condition2) {
 *     // Executes when at least one condition is true
 * }
 *
 * if ((condition1 && condition2) || condition3) {
 *     // Combined logical conditions
 * }
 */

// Example
const salary = 25000;
const isBCS = false;
const hasCar = false;

// AND (&&)
if (salary > 50000 && isBCS === true && hasCar) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}

// OR (||)
if (salary > 75000 || isBCS === true || hasCar) {
    console.log("Accepted");
} else {
    console.log("Rejected");
}

// Combined Conditions
if ((salary > 50000 && hasCar) || isBCS) {
    console.log("Condition matched");
}

/**
 * ==========================================
 * Notes
 * ==========================================
 *
 * ✔ && (AND)
 *   • Every condition must be true.
 *   • One false condition makes the result false.
 *
 * ✔ || (OR)
 *   • Only one condition needs to be true.
 *   • Returns false only when all conditions are false.
 *
 * ✔ Parentheses () improve readability and
 *   control the order of evaluation.
 *
 * ✔ Boolean variables can be written directly:
 *      if (hasCar)
 *      if (!hasCar)
 *
 * ✔ Best Practices:
 *   • Keep conditions simple and readable.
 *   • Use meaningful variable names.
 *   • Group complex conditions with parentheses.
 */