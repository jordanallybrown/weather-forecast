
/**
 * Helper function that will generate a title and message based on the server response status code
 * @param status Number representing server response status code 
 * @returns {title, message}
 */
const getResponseStatusInfo = (status) => {

    let title, message;
    switch (status) {
        case 500 || 503:
          title = 'Connection Issue';
          message = "Unable to connect to location service. Try refreshing page or checking back later.";
          break;
        case 400:
          title = 'Type a Location!';
          message = "Please input an address and press search to view the weather!";
          break;
        case 404:
          title = 'Invalid Location';
          message = "Cannot find that location. Please try again with another search term.";
          break;
        default:
          title = 'Oops!';
          message = "Sorry, something went wrong. Try checking back later.";
      }

      return {title, message};
}
  

export default getResponseStatusInfo;