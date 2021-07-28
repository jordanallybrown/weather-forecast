
/**
 * Extract geolocation coordinate data from JSON object provided by the Geolocation API
 * @param {*} data JSON object
 * @returns Object containing latitude, longitude and location fields
 */
const getGeolocation = (data) => {

    return {
        latitude: data.features[0].center[1],
        longitude: data.features[0].center[0],
        location: data.features[0].place_name
    }
        
}

module.exports = getGeolocation;