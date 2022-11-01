const source = [1,2,3,4,5,1,2,3,4,5];

console.log(source.find(value => value > 3)); // 4
console.log(source.findIndex(value => value > 3)); // 3
console.log(source.includes(7));  // false
console.log(source.indexOf(5));  // 4
console.log(source.lastIndexOf(5));  // 9