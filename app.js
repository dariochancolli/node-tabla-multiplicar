

const fs = require('fs');

const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js')

console.clear();

//console.log(process.argv);
//console.log(argv);


//console.log('base: yargs', argv.base);
//const [ , , arg3='base=5'] = process.argv;
//const [ , base = 5] = arg3.split('=');

//const base=6;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
