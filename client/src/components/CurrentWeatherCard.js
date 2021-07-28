import React from "react";

import {Card, ListGroup,ListGroupItem } from 'react-bootstrap';

const styles = {
  cardBody: {
    width: '18rem' 
  },
  cardImage: {
    height: '100px',
    width: '100px'
  }
}

/**
 * CurrentWeatherCard component is responsible for displaying a weather card that includes
 * forecast information details for the user.
 */
const CurrentWeatherCard = ( {location, summary, low, high, feelsLike, wind, icon } ) => {

    return (
        <Card style={styles.cardBody} >
        <Card.Img variant="top" src={icon} style={styles.cardImage}  />
        
        <Card.Body>
          <Card.Title>{location}</Card.Title>
          <Card.Text>
            {summary}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Low {low} and High {high}</ListGroupItem>
          <ListGroupItem>Feels like {feelsLike} degrees</ListGroupItem>
          <ListGroupItem>Wind {wind} mph</ListGroupItem>
        </ListGroup>
      
      </Card>
    )

}

export default CurrentWeatherCard;