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

const input = document.getElementById("input")
const btn = document.getElementById("submit")
btn.addEventListener("click", () => {
    console.log(input);
})
