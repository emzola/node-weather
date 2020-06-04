const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a4a22ed476aba0f96a55d7e878d8cbda&query=${latitude},${longitude}`

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to API')
    } else if (response.body.error) {
      callback('Unable to find location')
    } else {
      const data = response.body.current
      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees. It feels like ${data.feelslike} out`
      )
    }
  })
}

module.exports = forecast
