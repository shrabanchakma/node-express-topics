const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// };

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise(
      "./content/subfolder/second.txt",
      "utf8"
    );
    await writeFilePromise(
      "./content/subfolder/test.txt",
      "i'm writing in the test"
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
// getText("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
