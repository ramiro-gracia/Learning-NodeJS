// .js --> por defecto utiliza CommonJS (cjs)
// .mjs --> para utilizar ES Modules - Modular Java Script (mjs)
// .cjs --> para utilizar CommonJS

import {sum, sub, mult} from './sum.mjs'

console.log(sum(1,2));
console.log(sub(2,2));
console.log(mult(5,2));
