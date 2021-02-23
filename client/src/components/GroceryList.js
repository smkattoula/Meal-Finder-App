import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";
import GroceryModal from "./GroceryModal";

const GroceryList = ({ groceryList, setGroceryList }) => {
  const getAllGroceries = async () => {
    try {
      const response = await axios.get("/api/v1/groceries");

      const data = response.data;
      setGroceryList(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllGroceries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/groceries/${id}`);

      const data = await response.data;
      setGroceryList(groceryList.filter((grocery) => grocery._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <Container>
        <Table striped bordered hover className="text-center mt-5">
          <thead>
            <tr>
              <th>Groceries</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {groceryList.map((grocery) => (
              <tr key={grocery._id}>
                <td>{grocery.groceryItem}</td>
                <td>
                  <GroceryModal grocery={grocery} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(grocery._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

export default GroceryList;
