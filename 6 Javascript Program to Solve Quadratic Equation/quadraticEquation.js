/* Question:-Javascript Program to Solve Quadratic Equation*/

//Answer:- 
let root, root1;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root = (-b + Math.sqrt(discriminant)) / (2 * a); // Math.sqrt() is used for square root of Number
    root1 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root} and ${root1}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root = root1 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root} and ${root1}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);  // toFixed(2) is used for rounds up the decimal number to two decimal values.
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}