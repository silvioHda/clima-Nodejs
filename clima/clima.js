const axios = require('axios');

const getClima = async (lat,lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb64268c018e72349e7cacdfd7559f87`);

    return resp.data.main.temp;
}

module.exports ={
    getClima
}