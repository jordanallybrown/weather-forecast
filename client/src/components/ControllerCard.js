import React,  { Fragment } from "react";

import CurrentWeatherCard from "./CurrentWeatherCard";
import InfoCard from "./InfoCard";

/**
 * 
 * Controller card that delegates which card will be shown based on error (InfoCard) or success (CurrentWeatherCard).
 * 
 */
const ControllerCard = ({isError, forecast, status}) => {

    return (
        <Fragment>
        {isError ? (
           <InfoCard status={status} />
        ) : (
            <CurrentWeatherCard 
            location={forecast.location} 
            summary={forecast.summary}
            feelsLike={forecast.feelsLike}
            low={forecast.low}
            high={forecast.high}
            icon={forecast.icon}
            wind={forecast.wind}
            description={forecast.description}
            />
        )}
        </Fragment>
    )
}

export default ControllerCard;