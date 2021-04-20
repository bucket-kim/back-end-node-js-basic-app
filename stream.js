const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1
  // fs.readFile("text-file.txt", (err, data) => {
  //   if (err) console.lot(err);
  //   res.end(data);
  // });

  // solution 2: streams
  // const readable = fs.createReadStream("texst-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found");
  // });

  // solution3: pipe
  const readable = fs.createReadStream("text-file.txt");
  readable.pipe(res);
});

server.listen(8000, () => {
  console.log("listening to localhost:8000");
});
