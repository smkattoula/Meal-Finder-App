import React from "react";
import { Card, Container } from "react-bootstrap";
import MealModal from "../components/MealModal";

const MealItem = ({ meal }) => {
  return (
    <Container className="mt-4">
      <Card className="text-center h-100">
        <Card.Img variant="top" src={meal.strMealThumb} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>
            <b>{meal.strMeal}</b>
          </Card.Title>
          <MealModal meal={meal} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MealItem;
