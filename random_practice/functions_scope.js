// task1: write a function that returns the maximum of three numbers
const input1 = document.getElementById("fNum");
const input2 = document.getElementById("sNum");
const input3 = document.getElementById("tNum");
const button = document.getElementById("submit");
const inputs = [input1, input2, input3];
const resultHold = document.createElement("p")

// const result = document.createTextNode("")
const result = Math.max(inputs);

button.addEventListener("click", () => { resultHold.appendChild(result); }

)

