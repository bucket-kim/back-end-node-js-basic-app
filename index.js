const fs = require("fs");

// blocking method, synchronous
const textIn = fs.readFileSync("./text/input.txt", "utf8");
console.log(textIn);

const textOut = `This is just a random string: ${textIn}\n Created on ${Date.now()}`;

fs.writeFileSync("./text/output.txt", textOut);
console.log("File written!");

// non-blocking, asychronous
