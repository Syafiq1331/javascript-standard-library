// By default object bisa di ubah atau di hapus properties nya, namun jika kita ingin membuat sebuah object yang tidak bisa di ubah kita bisa menggunakan beberapa static method. Contohnya menggunakan Object.freeze() & Object.seal()



// Object.freeze() => Mengubah object menjadi object yang tidak bisa di ubah atau di hapus attributenya
const person = {
    firstName : "Syafiq",
    middleName : "Rizky",
    lastName : "Fauzi"
};

Object.freeze(person);
person.firstName = "Di ubah" //Tidak akan berubah
delete person.firstName; // tidak berubah
console.log(person) 

// Object.seal() =>  mengubah object menjadi object yang tidak bisa di hapus attribute nya
const person2 = {
    firstName : "Eko",
    lastName : "Khannedy"
}

Object.seal(person2);
person2.firstName = "Syafiq";
delete person2.lastName;
console.log(person2);