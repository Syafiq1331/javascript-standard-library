const person = {};

Reflect.set(person, 'firstName', 'Eko');
Reflect.set(person, 'lastName', 'Eko');

console.log(person);

console.log(Reflect.has(person, 'firstName'));
console.log(Reflect.has(person, 'middleName'));