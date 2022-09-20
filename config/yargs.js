const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar',
        demandOption: true
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el número hasta donde quieres la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra la tabla en consola',
        default: false
    })
    .check( (argv, options) => {
        if( isNaN( argv.b )){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;