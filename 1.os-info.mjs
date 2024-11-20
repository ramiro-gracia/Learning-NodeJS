// Paso de require a import usando ECMAScript module (ES module)
/*
Tambien se puede usar de la siguiente forma:
import os from 'node:os' 
*/
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Informacion del sistema operativo:');
console.log('---------------');
console.log('Nombre del sistema operativo', platform());
console.log('Version del sistema operativo', release());
console.log('Arquitectura del sistema operativo', arch());
console.log('CPUs', cpus()) // <-- Vamos a poder escalar procesos en node
console.log('Memoria libre', freemem() / 1024 / 1024) // <-- Se divide en 1024 para obtener los mb
console.log('Memoria total', totalmem()  / 1024 / 1024)
console.log('Uptime', uptime() / 60 / 60);