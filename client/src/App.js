import React, { useState } from "react";

import {Container, Row, Col} from 'react-bootstrap';

import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";

import "./App.css";


function App() {
  const [inputLocation, setInputLocation] = useState("");

  return (
    <div className="App">
      <Container className="p-3">
        <header>
          <h1>Weather Forecast </h1>
          <p className="text-muted">Enter a street addresss, city, state or any location to see the current weather forecast.</p>
        </header>
        
        <Row className="justify-content-md-center">
          <Col xs={12} sm={4} md={4}>
            <SearchForm setInputLocation={setInputLocation} />
            <CurrentWeather inputLocation={inputLocation} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;