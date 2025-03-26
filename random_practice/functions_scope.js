// task1: write a function that returns the maximum of three numbers
const input1 = document.getElementById("fNum");
const input2 = document.getElementById("sNum");
const input3 = document.getElementById("tNum");
const button = document.getElementById("submit");
const resultHold = document.createElement("p")
const form = document.getElementById("form")

// const result = document.createTextNode("")
// const result = Math.max(inputs);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = parseInt([input1.value, input2.value, input3.value]);
    const result = Math.max(inputs);
    console.log(result);
})

