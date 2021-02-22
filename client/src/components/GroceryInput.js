import React, { Fragment, useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

const GroceryInput = () => {
  return (
    <Fragment>
      <Container>
        <h1 className="text-center mt-3">My Grocery List</h1>
        <Form>
          <Form.Group controlId="formBasicText">
            <Form.Control
              className="mt-3"
              type="text"
              placeholder="Enter Grocery Item..."
            />
          </Form.Group>
          <Button className="btn btn-block" variant="primary" type="submit">
            Add Grocery
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default GroceryInput;
