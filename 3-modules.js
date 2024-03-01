// commonJS , every file is a module (by default)
// Modules - Encapsulated code (only share minimum)

const { peter, john } = require(`./4-names`);
const callName = require("./4-utils");
const data = require("./4-utils-2");
require("./4-utils-3");
console.log(data);
callName(peter);
callName(john);
