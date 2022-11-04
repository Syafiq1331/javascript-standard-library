// Set itu seperti array namun bedanya set dan array adalah set tidak akan menduplikasi data yang sama sedangkan ketika kita menggunakan array ia tidak peduli apakah datanya sama atau beda tetap akan di masukkan ke dalam array tersebut

const set = new Set();

set.add("Syafiq");
set.add("Syafiq");
set.add("Fauzi");

console.log(set);