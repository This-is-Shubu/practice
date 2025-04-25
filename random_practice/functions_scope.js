// task1: write a function that returns the maximum of three numbers
const input1_1 = document.getElementById("fNum1");
const input1_2 = document.getElementById("sNum1");
const input1_3 = document.getElementById("tNum1");
const print1 = document.getElementById("p1")
const form = document.getElementById("form1")


const inputs = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const result = Math.max(input1_1.value, input1_2.value, input1_3.value);
    console.log(result);
    print1.querySelector("#result1").textContent = result;
})


// task2: Implement a function that counts the number of vowels in a string.

const input = document.getElementById("textArea2")
const btn2 = document.getElementById("submit2")
const print2 = document.getElementById("p2")


function counter() {
    let count = 0;
    for (i = 0; i < input.value.length; i++) {

        if (/[aeiou]/i.test(input.value[i])) {
            count++;
        }
    }
    console.log(count);
    print2.querySelector("#result2").textContent = count;
}

btn2.addEventListener("click", () => {
    counter();
})

// task3: Create a function that takes a number and returns true if it's a prime number.

const input3 = document.getElementById("input3")
const btn3 = document.getElementById("submit3")
const result3 = document.getElementById("p3").querySelector("#result3")

function isPrime(num) {
    num = Number(num);
    if (isNaN(num)) return false;
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

btn3.addEventListener("click", () => {
    const num = input3.value;
    const primeCheck = isPrime(num);
    result3.textContent = primeCheck;
})