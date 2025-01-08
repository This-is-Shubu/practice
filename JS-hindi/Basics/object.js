const patient = {
    name: "rajneesh",
    age: 28,
    work: "bakchodi",
    cheli: 5
}

// console.log(newObject.cheli);

// Object.freeze(newObject)

// newObject.name = "change"
// newObject.age = 29

// console.log(newObject.indexOf);
// console.log(newObject.age);

const firstObject = {
    name: "anonymous",
    age: 26,
    work: "operator",
    marks: [63, 45, 76, 59, 64]
}

// console.log(firstObject['name']);
// console.log(firstObject.work);
// console.log(firstObject);
console.log(firstObject.marks[1, 3]);

console.log(Object.values(patient));
console.log(Object.entries(patient));
console.log(Object.keys(patient));



