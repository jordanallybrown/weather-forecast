import React, { Fragment, useState, useEffect } from "react";

import {Spinner} from 'react-bootstrap';

import ControllerCard from "./ControllerCard";

/**
 * CurrentWeather component queries for weather forecast based on user's inputted location 
 * and renders a Spinner if request is loading and then either an Info Card (if things went wrong)
 * or a Current Weather Card (if things went well) 
 */
const CurrentWeather = ({ inputLocation }) => {

  // combine weather forecast details into one state object so there will only be one render each time
  const [forecast, setForecast] = useState({
    location: '',
    summary: '',
    feelsLike: '',
    low: '',
    high: '',
    icon: '',
    wind: '',
    description: '',
  })
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseStatus, setResponseStatus] = useState(200);

  // Fetch the weather forecast based on the user's input and only update when the user changes their search location
  useEffect(() => {

      const fetchForecast = async () => {

        setIsError(false);
        setIsLoading(true);
        try {
          
          // If there is no location entered, don't bother requesting from server, indicate status and error to let user to know type a location
          if(!inputLocation) {
            setResponseStatus(400);
            setIsError(true);
            setIsLoading(false);
            return;
          }

          // Request current weather forecast from our server using the user's location input
          const response = await fetch(`/weather?location=${inputLocation}`);

          setResponseStatus(response.status);
         
           // Ensure that any responses other than 200 are caught and use error
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const data = await response.json();

          // Extract the current weather details we want to display to the user
          setForecast({ 
            location: data.location, 
            summary: data.summary, 
            feelsLike: data.feelsLike, 
            low: data.low, 
            high: data.high, 
            icon: data.icon, 
            wind: data.wind, 
            description: data.description
          });

        } catch (e) {
            setIsError(true);
        }
        setIsLoading(false);
      };

      fetchForecast();

  }, [inputLocation]);



  return (

    <Fragment>

    {isLoading ? (
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    ) : (
      <ControllerCard isError={isError} forecast={forecast} status={responseStatus} />
    )}
  </Fragment>
        
    )
}

export default CurrentWeather;