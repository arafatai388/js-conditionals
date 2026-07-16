/**
 * ==========================================
 * JavaScript Nested if...else Statements
 * ==========================================
 *
 * A nested `if` statement is an `if` statement
 * placed inside another `if` or `else` block.
 *
 * Nested conditionals are useful when a second
 * decision depends on the first condition being true.
 *
 * Syntax:
 *
 * if (condition1) {
 *     // Code
 *
 *     if (condition2) {
 *         // Code
 *     } else {
 *         // Code
 *     }
 *
 * } else {
 *     // Code
 * }
 */

const money = 800;

if (money > 500) {
    console.log("You have enough money.");

    if (money > 1000) {
        console.log("You have more than 1000.");

        if (money > 5000) {
            console.log("You have more than 5000.");
        } else {
            console.log("Money is between 1000 and 5000.");
        }
    } else {
        console.log("Money is between 500 and 1000.");
    }
} else {
    console.log("You have 500 or less.");

    const isHungry = false;

    if (isHungry) {
        console.log("Let's find something to eat.");
    } else {
        console.log("Not hungry right now.");
    }
}

/**
 * ==========================================
 * Notes
 * ==========================================
 *
 * ✔ A nested `if` is an `if` statement inside
 *   another `if` or `else` block.
 *
 * ✔ The inner condition is checked only after
 *   the outer condition is true.
 *
 * ✔ Use nested conditionals when one decision
 *   depends on the result of another decision.
 *
 * ✔ Avoid excessive nesting because it makes
 *   code harder to read and maintain.
 *
 * ✔ Use proper indentation to improve readability.
 *
 * Best Practices:
 * • Keep nested levels as shallow as possible.
 * • Use meaningful variable names.
 * • Simplify complex logic when possible.
 */