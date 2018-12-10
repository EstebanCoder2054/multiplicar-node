//existen 3 tipos de required

const fs = require('fs'); //este tipo de require ya está declarado en node y solo se declara para usar
//const ex = require('express'); //express no viene nativo con el node, toca descargarlo para usarlo
//const propio = require(./ o ../ y aquí viene la ruta) //son archivos creados por nosotros
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('=================='.red);
    console.log(`Tabla del ${base}`.italic);
    console.log('=================='.blue);


    for(let i=0;i<=limite;i++){
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {
        
        if(!Number(base)){
            reject('No es un número')
            return;
        }

        let data = '';

    for(let i=1;i<=limite;i++){
    data = data + (`${base} * ${i} = ${base * i}\n`);
    }

    //para que el archivo quede grabado en una dirección específica simplemente se especifica el path dentro 

    fs.writeFile(`./tablas/tablaDel${base}-al-${limite}.txt`, data, (err)=>{
        if(err){
            reject(err);
        }else{
            resolve(`tablaDel${base}-al-${limite}.txt`);
        }

        
        });
    } );
}


//el modulo es un objeto global de intercambio de información 
module.exports = {
    crearArchivo,
    listarTabla
}
