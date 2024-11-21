const path = require('node:path');

// --> Distintos sistemas operativos utiliza / o \ para sus rutas de archivos, por lo que puede llevar a problemas de compatibilidad
console.log('Separacion que utiliza mi SO:',path.sep); // Para ver que tipo de separacion utiliza mi SO. 

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log('Ruta completa:',filePath);

// Obtener nombre solo del fichero de una ruta completa
const base = path.basename('/temp/contras/password.txt');
console.log('Solo el fichero:',base);

// Obtener el nombre del ficher sin la extension
const fileName = path.basename('/temp/contras/password.txt', '.txt');
console.log('Solo nombre del fichero sin extension:',fileName);

// Obtener solo la extension del fichero
const extension = path.extname('/temp/contras/password.txt');
console.log('Solo extension:', extension);
