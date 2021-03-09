import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import loadUser from "../utils/loadUser";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/meals");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { email, password };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post("/api/v1/users/auth", body, config);

      const data = await response.data;
      localStorage.setItem("token", data.token);
      history.push("/meals");
      loadUser();
      window.location = "/meals";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <Container className="mt-3">
        <Form onSubmit={handleSubmit}>
          <h1 className="text-center">Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
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
