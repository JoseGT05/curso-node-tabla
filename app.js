

//Imprimir en consola la tabla del 5

// const { boolean } = require('yargs');
// const yargs = require('yargs');
const { crearArchivo } = require( './helpers/multiplicar' );
const argv = require( './config/yargs')
const colors = require('colors');



//optional ('l')
//listar
// boolean
// default: false



console.clear();

//console.log( argv );

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ) )
    .catch( err => console.log( err ) );



