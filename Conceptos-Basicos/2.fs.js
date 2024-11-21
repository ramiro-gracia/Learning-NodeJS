// File System (fs)
const fs = require('node:fs'); // A partir de node 16, se recomienda poner node:(modulo)

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(), // Si es un archivo
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size, 'bytes', // Tamaño en bytes
)



