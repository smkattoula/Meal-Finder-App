import React, { Fragment } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

const GroceryHome = () => {
  return (
    <Fragment>
      <GroceryInput />
      <GroceryList />
    </Fragment>
  );
};

export default GroceryHome;
