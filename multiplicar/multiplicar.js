//required
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('NO ES UN NÚMERO');
            return;

        }
        let data = '';

        for (let index = 1; index <= 10; index++) {
            data += ` ${base} * ${index} = ${base * index} \n`;
        }

        fs.writeFile(`tabla-${base}multiplicar.txt`, data, 'utf8', (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });


    });
}


module.exports = {
    crearArchivo: crearArchivo
}