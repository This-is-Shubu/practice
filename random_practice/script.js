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

const input = prompt("Enter a value:");
function checkInput() {
    input = prompt("enter anything")
    num = Number(input);
    num == !NaN ? console.log(`this is ${typeof num}`) : console.log(`this is not a number`);
}
