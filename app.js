const axios = require('axios');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        des: 'direccion de la ciudad',
        demand: true
    }
}).argv;


const getInfo = async(direccion) =>{

    try {
        const coords = await  lugar.getLugatLatLng(direccion);
        const temp = await clima.getClima(coords.lat,coords.lng); 
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

  
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);