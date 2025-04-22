// task1: write a function that returns the maximum of three numbers
const input1_1 = document.getElementById("fNum1");
const input1_2 = document.getElementById("sNum1");
const input1_3 = document.getElementById("tNum1");
const resultHold = document.getElementById("p1")
const form = document.getElementById("form1")


const inputs = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const result = Math.max(input1_1.value, input1_2.value, input1_3.value);
    console.log(result);
    resultHold.querySelector("#result1").textContent = result;
})


// task2: Implement a function that counts the number of vowels in a string.

const input = document.getElementById("textArea2")
const btn2 = document.getElementById("submit2")
const print = document.getElementById("p2")


function counter() {
    let count = 0;
    for (i = 0; i < input.value.length; i++) {

        if (/[aeiou]/i.test(input.value[i])) {
            count++;
        }
    }
    console.log(count);
    print.querySelector("#result2").textContent = count;
}

btn2.addEventListener("click", () => {
    counter();
})

// task3: Create a function that takes a number and returns true if it's a prime number.

const input3 = document.getElementById("input3")
const btn3 =

    function isPrime() {
        if (input3 <= 1) return false;
        if (input3 <= 3) return true;

        if (input3 % 2 === 0 || input3 % 3 === 0) return false;

        for (let i = 5; i * i <= input3; i += 6) {
            if (input3 % i === 0 || input3 % (i + 2) === 0) return false;
        }
        return true;
    }

