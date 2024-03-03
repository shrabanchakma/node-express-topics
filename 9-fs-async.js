const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/async-magic.txt",
      "this is async magic here",
      (err, result) => {
        if (err) {
          return;
        }
        console.log("done with the task");
      }
    );
  });
});

console.log("start with the new one");
