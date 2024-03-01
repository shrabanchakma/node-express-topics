const path = require("path");
console.log(path.sep);
const filePath = path.join("content", "subfolder", "text");
const base = path.basename(filePath);
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "text.txt"
);
// console.log(filePath);
// console.log(base);
console.log(absolutePath);
