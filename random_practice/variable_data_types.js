// task1: check if a number is even or odd

/* function checkNumber() {
    let input = prompt("please enter a random number")
    if (input % 2 == 0) {
        console.log("this number is even");
    }
    else {
        console.log("this number is odd");

    }
    }
    console.log(input); */



// task2: check if a number is negative, zero or positive

/* function checkNumber() {
    let number = prompt("give a random integer")
    if (number < 0) {
        console.log(`${number} this number is NEGATIVE`);

    } else if (number == 0) {
        console.log(`${number} this number is ZERO`);

    } else {
        console.log(`this number is POSITIVE`);
    }
} */

// task3: convert a given temperature from celsius to fahrenheit and vice VideoColorSpace.

/* function convertIntoCelsius() {
    let input = prompt(`enter your temperature in Fahrenheit`);
    celsius = (((input - 32) * 5) / 9);
    if (celsius % 1 !== 0) {
        console.log(`${celsius.toFixed(2)} degree celsius`)
    }
    else {
        console.log(`${celsius} degree celsius`);

    }

}

function convertIntoFahrenheit() {
    let input = prompt("enter your temperature in celsius");
    fahrenheit = (((input * 9) / 5) + 32);
    if (fahrenheit % 1 !== 0) {
        console.log(`${fahrenheit.toFixed(2)} degree fahrenheit`)
    }
    else {
        console.log(`${fahrenheit} degree fahrenheit`);

    }
}
 */

// task4: create a program that swaps two variables' values without using a temporary variable.

/* let a = 4;
let b = 5;

a = a + b;
b = a - b;
a = - (b - a);
 */

// task5: Check if a given year is leap year

/* function isLeapYear() {
    input = prompt("enter any year")
    input % 4 == 0 ? console.log("this is a leap year") : console.log("this isn't a leap year");

} */

// task6: write a program that converts a number into a string and vice versa
//  part-1: which checks if entered value is string or number
/* const input = prompt("enter any number")

const value = isNaN(input) && input.trim() !== "" ? input : Number(input);

console.log(typeof value); */

// part-2 converts the value into a string or vice versa

/* const input = prompt("enter anything")
if (input === null || input === "") {
    console.log("input is empty");
}
else {
    let value;
    if (!isNaN(input)) { value = Number(input) }
    else if (/[a-zA-Z]/.test(input) && /[0-9]/.test(input)) {
        value = "invalid input";
    } else {
        value = String(input);
    }

    if (typeof value == "number") {
        console.log(`${value} converted into string`)
    } else if (value == "invalid input") {
        console.log(`${value} cannot be converted into string or number`);
    } else {
        console.log(`${value} converted into number`)
    };
}
 */
