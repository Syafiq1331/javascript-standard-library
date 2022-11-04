const original = "Syafiq Rizky Fauzi";

const encoded = btoa(original);
console.log(encoded);

const decoded = atob(encoded);
console.log(decoded);