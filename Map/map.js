const map = new Map();
map.set("name", "Syafiq");
map.set("address","cianjur");

console.log(map);
console.log(map.get("name"));
console.log(map.get("address"));

for(const element of map){
    console.log(`${element[0]} : ${element[1]}`)
}

map.forEach((value, key) => console.log(`${key} adalah : ${value}`));