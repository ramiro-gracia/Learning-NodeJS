// Asincornia promesas
const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo (1)');

fs.readFile('./archivo.txt', 'utf-8')
    .then(text =>{
        console.log('Primer texto:\n', text)
    });

console.log("Haciendo cosas mientras lee los archivos")


console.log('Leyendo el segundo archivo (2)');

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text =>{
        console.log('Segundo texto:\n', text)
    });