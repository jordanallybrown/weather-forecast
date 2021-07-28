const { WEATHER_ICON_URL, WEATHER_ICON_EXTN } = require('../constants/weather');

/**
 * Generate the src URL for the OpenWeather icon
 * @param String icon 
 * @returns String URL
 */
const getWeatherIcon = (icon) => {
    return `${WEATHER_ICON_URL}${icon}${WEATHER_ICON_EXTN}`;
}


/**
 * Extract current weather data from JSON object provided by the OpenWeather API
 * @param {} data JSON object 
 * @returns Object containing all current weather fields
 */
const getCurrentWeather = (data) => {

    return {
        summary: `${data.weather[0].main}. It is currently ${data.main.temp} degrees.`,
        feelsLike: data.main.feels_like,
        low: data.main.temp_min,
        high: data.main.temp_max,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        icon: getWeatherIcon(data.weather[0].icon),
    }
}

module.exports = getCurrentWeather;
