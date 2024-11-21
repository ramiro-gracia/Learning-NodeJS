// Se recomienda con import (ECSMAScript)
import { readFile } from'node:fs/promises';


console.log('Leyendo el primer archivo (1)...');
const text = await readFile('./archivo.txt', 'utf-8');
console.log('Primer texto:', text);

console.log('--> Hacer cosas mientras lee el archivo');

console.log('Leyendo el segundo archivo (2)...');
const secondText = await readFile('./archivo2.txt', 'utf-8');
console.log('Segundo texto', secondText);