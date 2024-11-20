// Asincornia
const fs = require('node:fs');

console.log('Leyendo el primer archivo (1)');

// Callback (funciones que se ejecutan mientras sucede otra cosa en el codigo)
fs.readFile('./archivo.txt', 'utf-8', (err, text) =>{
    console.log('\nPrimer texto:', text);
});
console.log('--> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo (2)\n');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) =>{
    console.log('\nSegundo texto:',text);
});

