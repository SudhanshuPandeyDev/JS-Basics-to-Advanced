// Module import file

// default import
import mul from "./10_mathModule.js";
console.log(mul(2, 5));

// named import
import { add, sub } from "./10_mathModule.js";
console.log(add(2, 5));
console.log(sub(2, 5));
