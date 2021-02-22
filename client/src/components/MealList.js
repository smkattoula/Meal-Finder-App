import React from "react";
import { Container } from "react-bootstrap";
import MealItem from "./MealItem";

const MealList = ({ list }) => {
  return (
    <Container className="meals-grid">
      {list && list.map((meal) => <MealItem key={meal.idMeal} meal={meal} />)}
    </Container>
  );
};

export default MealList;
