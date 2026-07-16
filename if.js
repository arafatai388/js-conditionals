/**
 * ==========================================
 * JavaScript Conditional Statements (if)
 * ==========================================
 *
 * A conditional statement allows the program
 * to make decisions based on a condition.
 *
 * Syntax:
 * if (condition) {
 *     // Code runs only if the condition is true
 * }
 *
 * If the condition is false, the code inside
 * the block is skipped.
 */

// Example 1
if (8 > 3) {
    console.log("Inside the condition");
    console.log("8 is bigger than 3");
}

// Example 2
const price = 1400;

if (price < 500) {
    console.log("Price is lower than 500");
}

// Example 3
const money = 5000;

if (price < money) {
    console.log("I will buy it.");
}

// Example 4 (String Comparison)
const name = "Alu";

if (name === "Alu") {
    console.log("We are Mr. Potato.");
}

// Example 5 (Boolean Comparison)
const isGorib = true;

if (isGorib === true) {
    console.log("Need to save money.");
}

/**
 * ==========================================
 * Notes
 * ==========================================
 *
 * ✔ if executes only when the condition is true.
 *
 * ✔ Conditions usually use comparison operators:
 *    >   Greater than
 *    <   Less than
 *    >=  Greater than or equal
 *    <=  Less than or equal
 *    === Strict equal (recommended)
 *    !== Strict not equal
 *
 * ✔ A condition always returns:
 *    true
 *    false
 *
 * ✔ Code inside {} is called the "if block".
 *
 * ✔ Boolean values:
 *    true
 *    false
 *
 * ✔ Best Practice:
 *    Instead of writing:
 *        if (isGorib === true)
 *
 *    Write:
 *        if (isGorib)
 *
 *    Instead of:
 *        if (isGorib === false)
 *
 *    Write:
 *        if (!isGorib)
 */