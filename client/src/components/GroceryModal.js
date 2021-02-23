import axios from "axios";
import React, { Fragment, useState } from "react";

const GroceryModal = ({ grocery }) => {
  const [groceryItem, setGroceryItem] = useState(grocery.groceryItem);

  const updateGroceryItem = async (id) => {
    try {
      const item = { groceryItem };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.put(`/api/v1/groceries/${id}`, item, config);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${grocery._id}`}
        onClick={() => setGroceryItem(grocery.groceryItem)}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${grocery._id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit Grocery Item
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setGroceryItem(grocery.groceryItem)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                value={groceryItem}
                onChange={(e) => setGroceryItem(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setGroceryItem(grocery.groceryItem)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => updateGroceryItem(grocery._id)}
              >
                Save Grocery
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GroceryModal;
