import React, { Fragment } from "react";
import { Table, Container } from "react-bootstrap";
import GroceryModal from "./GroceryModal";

const GroceryList = () => {
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
            <tr>
              <td>Eggs</td>
              <td>
                <GroceryModal />
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

export default GroceryList;
