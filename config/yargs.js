

const argv = require( 'yargs' )
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de Multiplicar'
    })
    .option('l', {
    alias: 'base',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la Tabla en Consola'
    })
    .option('h', {
        alias: 'base',
        type: 'number',
        default: 10,
        describe: 'Este es el numero hasta donde quieres la tabla'
        })
    .check( ( argv, options ) => {
    if( isNaN( argv.b ) ){
        throw 'La base tiene que ser un numero'
    }
    return true;
    })
    .argv;



    module.exports = argv;