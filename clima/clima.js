
const axios = require('axios');

const getClima = async (lon, lat ) => {

    try {
        const rsp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lon=${ lon }&lat=${ lat }&appid=329c8687b9731d806c0718bc5f39a33d&units=metric`)
        const temp = await rsp.data.main.temp;
        return temp;
        
    } catch (e) {
        return `No se puedo determinar el clima para estas coordenadas`;
    }
    
    
    
}

module.exports = {
    getClima
}