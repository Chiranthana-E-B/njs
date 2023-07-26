const fs = require('fs');
/*
fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log(err, data);
});

console.log("finish file read");
*/
/*
const a = fs.readFileSync('file.txt');
console.log(a.toString());

console.log("finish file read");
*/
/*
fs.writeFile('file.txt', "this is a data i want to write", () => {
    console.log("written to the file is success");
});

console.log("finish file read");
*/

const b = fs.writeFileSync('file.txt', "this is a data i want to write code");
console.log(b);

console.log("finish file read");