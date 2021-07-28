import React, { useState } from "react";
import {Button, Form} from 'react-bootstrap';

/**
 * SearchForm component is responsible for handling and updating the user's search location input
 * and updates the location state only when the user submits
 */
const SearchForm = ({ setInputLocation }) => {

    const [inputText, setInputText] = useState("");

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setInputLocation(inputText);
    }

    return (
        <Form className="mb-3">
            <Form.Group className="mb-3" controlId="formLocation">
                <Form.Control onChange={inputTextHandler} type="text" placeholder="Enter location"  />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Button onClick={submitHandler} variant="primary" type="submit">
              Search
            </Button>
          </Form>

    );
};

export default SearchForm;