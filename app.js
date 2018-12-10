const argv = require('./config/yags.js').argv;
//con el .argv del final me aseguro de traer solo el let argv del archivo yargs.js
const colors = require('colors');
 


const {crearArchivo} = require('./multiplicar/multiplicar.js');
const {listarTabla} = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch(comando){
    case 'listar': 
    listarTabla(argv.base, argv.limite);
    break;
    
    case 'crear': 
    crearArchivo(argv.base)
    .then( (archivo) => {
        return console.log(`Archivo creado: ${archivo}`.cyan);
    } ).catch( (err) =>{
        return console.log(err);
    } )

    break;

    default:
    console.log('comando desconocido');
}

//let base = 4;

//  let argv2 = process.argv;

// console.log(argv.base);

// console.log('Límite',argv.limite);

// console.log(argv);
// console.log(argv2);

// let parametro = argv[2];

//let base = parametro.split('=')[1];

     



