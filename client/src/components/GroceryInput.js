import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import GroceryList from "./GroceryList";

const GroceryInput = () => {
  const [groceryItem, setGroceryItem] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  const addGroceryItem = async () => {
    try {
      const item = { groceryItem };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (groceryItem === "") {
        alert("Please enter a search term");
      } else {
        const response = await axios.post("/api/v1/groceries", item, config);

        const data = await response.data;
        setGroceryList([data, ...groceryList]);
        setGroceryItem("");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGroceryItem();
  };

  return (
    <Fragment>
      <Container>
        <h1 className="text-center mt-3">My Grocery List</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Control
              className="mt-3"
              type="text"
              value={groceryItem}
              onChange={(e) => {
                setGroceryItem(e.target.value);
              }}
              placeholder="Enter Grocery Item..."
            />
          </Form.Group>
          <Button className="btn btn-block" variant="primary" type="submit">
            Add Grocery
          </Button>
        </Form>
      </Container>
      <GroceryList groceryList={groceryList} setGroceryList={setGroceryList} />
    </Fragment>
  );
};

export default GroceryInput;
