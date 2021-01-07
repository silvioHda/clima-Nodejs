const axios = require('axios');


const getLugatLatLng= async(dir) =>{
const encodeUlr = encodeURI(dir);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    headers: {'X-RapidAPI-Key': '1d734627f4msh55885445f7d684ap14b422jsn8248a276a403'}
  });

  const resp = await instance.get();

  if (resp.data.Results.legth === 0) {
      throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];

  const direccion = data.name;

  const lat = data.lat;

  const lng = data.lon;

  return {
      direccion,
      lat,
      lng
  }
}


module.exports = {
    getLugatLatLng
}
