const myArray = ["name", "place", 23, true, { name: "nothing" }, function calculate() { console.log("this is function") }]

myArray.push("another element", 34)

// console.log(myArray);

// myArray.pop()

// console.log(myArray);

const newArray = [4, "amit", "rajneesh", 23, true]

const concat = newArray.splice(1, 3)
// console.log(concat);
// console.log(newArray);

// console.log(myArray.includes("place"));
console.log(myArray.findIndex());