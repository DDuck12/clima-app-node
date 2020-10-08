const axios = require('axios')

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5fb1a4792b07ea4e264979fb779e831e&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}