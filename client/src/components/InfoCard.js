import React from "react";

import { Card } from 'react-bootstrap';

import getResponseStatusInfo from '../utils/helpers';

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
 * InfoCard component is responsible for displaying a message to the user in the form of a card
 * to inform the user that they need to modify their input to a valid search location.
 */
const InfoCard = ({status}) => {

  // Generate info message for user based on status code
  const {message, title} = getResponseStatusInfo(status);
    
    return (
        <Card bg="light" style={styles.cardBody} >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {message}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default InfoCard;