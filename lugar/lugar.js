const axios = require('axios');

const getLatLng = async (dir) => {

    try {
        const encodeUlr = encodeURI( dir );

        const rsp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ encodeUlr }&appid=329c8687b9731d806c0718bc5f39a33d&units=metric`)
        
        const data = rsp.data;
        const direccion = data.name;
        const lon = data.coord.lon;
        const lat = data.coord.lat;

        return {
            direccion,
            lon,
            lat

        }

    } catch (e) {
        return `No se encontro información para esta dirección ${ dir }`;
    }

    
}

module.exports = {
    getLatLng

}

