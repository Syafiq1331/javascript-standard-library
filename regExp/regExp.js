// Merupakan implementasi dari regular expression di javascript
// Regular expression merupakan fitur untuk mencari text dengan pola

{
    // Cara membuat regExp
    const regex1 = /[a]/;
    const regex2 = new RegExp("[a]");
    const regex3 = new RegExp(/[a]/);

}

{
    // Test Regex
    const name = "Syafiq Rizky Fauzi";
    const regex = /Syafiq/;

    const result = regex.exec(name);
    console.log(result);
}

{
    // regex modifier
    const name = "Syafiq Rizky \n Fauzi Syafiq \n Syafiq Rizky";
    const regex1 = /eko/g;
    const regex2 = /rizky/i;

    let result;
    while((result = regex1.exec(name)) !== null) {
        console.log(result);
    };

}

{
    // Advanced Regex
    const regex = /ek[aiueo]/ig;
    const name = "eko eki eke eku eho eha ehha";

    let result;
    while((result = regex.exec(name)) !== null){
        console.log(result);
    }

}