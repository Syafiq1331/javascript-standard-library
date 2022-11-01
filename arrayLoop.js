const array = ["Syafiq", "Rizky", "Fauzi"];

array.forEach(function (value, index) {
    console.log(`${index} : ${value}`)
});

array.forEach((value, index) => console.log(`${index} : ${value}`));

array.forEach(value => console.log(value));