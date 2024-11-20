// Common js --> utiliza require
const os = require('node:os');

console.log('Informacion del sistema operativo:');
console.log('---------------');

console.log('Nombre del sistema operativo', os.platform());
console.log('Version del sistema operativo', os.release());
console.log('Arquitectura del sistema operativo', os.arch());
console.log('CPUs', os.cpus()) // <-- Vamos a poder escalar procesos en node
console.log('Memoria libre', os.freemem() / 1024 / 1024) // <-- Se divide en 1024 para obtener los mb
console.log('Memoria total', os.totalmem()  / 1024 / 1024)
console.log('Uptime', os.uptime() / 60 / 60);