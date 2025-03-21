// task1: write a function that returns the maximum of three numbers
const input1 = document.getElementById("fNum");
const input2 = document.getElementById("sNum");
const input3 = document.getElementById("tNum");
const button = document.getElementById("submit");

const resultHold = document.createElement("p")

// const result = document.createTextNode("")
// const result = Math.max(inputs);

button.addEventListener("click", () => {
    const inputs = [input1.value, input2.value, input3.value];
    console.log(inputs);


})

