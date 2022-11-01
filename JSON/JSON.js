const person = {
    firstName : "Syafiq",
    lastName : "Khannedy",
    address : {
        country : "Indonesia",
        city : "Subang"
    }
};

// JSON.stringify() => Digunakan untuk melakukan konversi dari Object ke string
const json = JSON.stringify(person);
console.log(json);


// JSON.parse() => Digunakan untuk melakukan konversi dari string ke object
const personAgain = JSON.parse(json);
console.log(personAgain);