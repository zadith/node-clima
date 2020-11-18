
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

//argv.direccion

/**
Obtenemos los datos del lugar
lugar.getLatLng( argv.direccion)
    .then( rsp => console.log(rsp))
    .catch( e => console.log(e));
 */

/**
clima.getClima(-72.94, -41.47)
    .then( console.log )
    .catch (console.log);
*/

const getInfo = async ( dir ) => {
    try {
        const ubicacion = await lugar.getLatLng(dir);
        const temp = await clima.getClima(ubicacion.lon, ubicacion.lat);

        return `El clima de ${ dir } es de ${ temp }°`;

    } catch (e) {
        return `No se pudo determinar el clima de ${ dir }`;
    }
}

getInfo(argv.direccion)
    .then( console.log )
    .catch( console.log );