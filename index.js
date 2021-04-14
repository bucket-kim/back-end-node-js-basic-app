const fs = require("fs");

// blocking method, synchronous
// const textIn = fs.readFileSync("./text/input.txt", "utf8");
// console.log(textIn);

// const textOut = `This is just a random string: ${textIn}\n Created on ${Date.now()}`;

// fs.writeFileSync("./text/output.txt", textOut);
// console.log("File written!");

// non-blocking, asychronous
fs.readFile("./text/start.txt", "utf8", (err, data1) => {
  fs.readFile(`./text/${data1}.txt`, "utf8", (err, data2) => {
    fs.readFile(`./text/append.txt`, "utf8", (err, data3) => {
      fs.writeFile("./text/final.txt", `${data2}\n${data3}`, "utf8", (err) => {
        console.log("Your file has been written~");
      });
    });
  });
});
console.log("Will read file!");
