// encode and decode URL

const url = 'http://www.contoh.com/?name=Eko Kurniawan Khannedy';
console.log(url);

const encoded = encodeURI(url);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);