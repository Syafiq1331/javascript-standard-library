const target = {firstName : "Eko"};
console.log(target);

const source = {lastName : "Khannedy"};
console.log(source);

// Object assign berfungsi untuk menambahkan object satu ke object yang lainnya
Object.assign(target, source);
console.log(target);