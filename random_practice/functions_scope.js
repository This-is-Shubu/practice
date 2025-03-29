// task1: write a function that returns the maximum of three numbers
const input1 = document.getElementById("fNum");
const input2 = document.getElementById("sNum");
const input3 = document.getElementById("tNum");
const resultHold = document.getElementById("p")
const form = document.getElementById("form")


const inputs = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const result = Math.max(input1.value, input2.value, input3.value);
    console.log(result);
    resultHold.querySelector("#result").textContent = result;



})
// task2: Implement a function that counts the number of vowels in a string.

const input = document.getElementById("paraInput")
const btn = document.getElementById("submit1")


function counter() {
    let count = 0;
    console.log(input.value);
    for (i = 0; i < input.value.length; i++) {

        if (/[aeiou]/i.test(input.value[i])) {
            count++;
        }
    }
    console.log(count);
}

btn.addEventListener("click", counter)

