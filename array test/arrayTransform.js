const names = ["Syafiq", "Rizky", "Fauzi"];
const namesUppecase = names.map(value => value.toUpperCase());

console.log(namesUppecase)

// Reduce
const namesReduces = names.reduce((before, value) => before + " " + value);
console.log(namesReduces);

// Reduce Right
const namesRight = names.reduceRight((before, value) => before + " " + value);
console.log(namesRight);