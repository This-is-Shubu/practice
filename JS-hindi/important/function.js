const user = {
    name: "vijay",
    age: 32,
    printName() {
        console.log("print this name");
    },
    obtainedMarks: [21, 40, 35, 28, 48]
}

console.log(user.printName());
console.log(user.obtainedMarks.find((value) => value > 28));
// function greet(name) {
//     if (!name) {
//         return;  // Exits the function early if 'name' is falsy
//     }
//     return 'Hello, ' + name + '!';
// }

// console.log(greet('vijay'));
