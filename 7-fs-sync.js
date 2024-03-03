const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt");
writeFileSync(
  "./content/magic-file.txt",
  "this is the magic file created by magic",
  { flag: "a" }
);
console.log(`${first} , ${second}`);
