const { readFile } = require('node:fs/promises');


// I.I.F.E --> Inmediatly Invoked Function Expression.
/*
( () => {}
)
*/
(
    async() => {

        console.log('Leyendo el primer archivo (1)...');
        const text = await readFile('./archivo.txt', 'utf-8');
        console.log('Primer texto:', text);
        
        console.log('--> Hacer cosas mientras lee el archivo');

        console.log('Leyendo el segundo archivo (2)...');
        const secondText = await readFile('./archivo2.txt', 'utf-8');
        console.log('Segundo texto', secondText);

    }
)(); // <-- (); aqui se invoca la funcion.