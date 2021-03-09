import React, { Fragment, useState } from "react";
import MealList from "../components/MealList";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

const Search = () => {
  const [list, setList] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const getMealsByIngredient = async (text) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`
      );
      console.log(response);

      const data = await response.data.meals;

      if (data === null) {
        alert("Please enter a proper ingredient!");
        setIngredient("");
      } else if (ingredient === "") {
        alert("Please enter a search term!");
      } else {
        setList(data);

        console.log(data);
        console.log(list);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMealsByIngredient(ingredient);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setList([]);
    setIngredient("");
  };

  return (
    <Fragment>
      <Container>
        <h1 className="text-center mt-3">Search Meal Recipes</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Control
              className="mt-3"
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              placeholder="Enter Meal Ingredient..."
            />
          </Form.Group>
          <Button className="btn btn-block" variant="primary" type="submit">
            Search
          </Button>
          {list.length > 0 && (
            <Button
              className="btn btn-block mt-3"
              variant="secondary"
              onClick={handleClear}
              type="submit"
            >
              Clear
            </Button>
          )}
        </Form>
      </Container>
      <MealList list={list} />
    </Fragment>
  );
};

export default Search;
