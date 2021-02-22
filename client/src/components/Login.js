import React, { Fragment } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  return (
    <Fragment>
      <Container className="mt-3">
        <Form>
          <h1 className="text-center">Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Button className="btn btn-block" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default Login;
