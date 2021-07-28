const express = require('express');
const axios = require('axios');
require('dotenv').config();

const {LOCATION_MISSING, LOCATION_NOT_FOUND, LOCATION_SERVICE_CONN_ERR} = require('../constants/messages');
const {GEOCODE_URL} = require('../constants/geocode');
const {WEATHER_URL} = require('../constants/weather');

const getCurrentWeather = require('../utils/weather');
const getGeolocation = require('../utils/geocode');

const router = new express.Router();

/**
 * GET route to request for current weather of a given location. Uses the Geolocation and OpenWeather
 * API to get the data we need to send back to client. Location can be a street address, city/state, state, address, or city.
 * 
 * e.g. /weather?location=Austin would be a valid GET request
 * 
 * JSON object is returned that includes weather data e.g.
 * 
 {
    "location": "Austin, Texas, United States",
    "summary": "Clouds. It is currently 94.73 degrees.",
    "feelsLike": 107.33,
    "low": 91.74,
    "high": 97.11,
    "humidity": 59,
    "wind": 5.75,
    "description": "scattered clouds",
    "icon": "http://openweathermap.org/img/wn/03d@2x.png"
    }
 */
router.get('/weather', async (req, res) => {

    try {
    
        // Ensure a location has been provided by client
        if(!req.query.location) {
            return res.status(400).send({
                message: LOCATION_MISSING
            });
        }

        // Request for geolocation coordinates
        let response = await axios(`${GEOCODE_URL}${encodeURIComponent(req.query.location)}.json?limit=1&access_token=${process.env.GEOCODE_API_KEY}`);
        
        // Geolocation features array will be empty if location coords not found
        if (response.data.features.length === 0) {
            return res.status(404).send({
                message: LOCATION_NOT_FOUND
            })
        }
        
        // Extract geolocation data we need 
        const {location, latitude, longitude} = getGeolocation(response.data);

        // Use the geolocation coords to request the current weather
        response = await axios(`${WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}&units=imperial`);
        
        // Extract relevant weather data details to send back
        const currentWeatherData = getCurrentWeather(response.data);
        const result = {location, ...currentWeatherData};

        res.send(result);

    } catch (e) {
    
        res.status(503).send({
            message: LOCATION_SERVICE_CONN_ERR
        });
        
    }
})


module.exports = router