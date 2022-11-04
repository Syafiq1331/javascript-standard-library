// symbol adalah tipe data yang akan di garansi selalu unique setiap kali kita membuatnya
// symbol kadang banyak digunakan untuk membuat key pada object

{
    const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "Syafiq";
person[lastName] = "Momo";

console.log(person);
console.log(person[firstName]);
console.log(person[lastName]);
}

{
    // Symbol for
    console.log(Symbol.for("FirstName") === Symbol.for("FirstName"));
}