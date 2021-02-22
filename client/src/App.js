import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/AppNavbar";
import MealHome from "./components/MealHome";
import GroceryHome from "./components/GroceryHome";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <AppNavbar />
        <Container fluid>
          <Switch>
            <Route exact path="/meals" component={MealHome} />
            <Route exact path="/grocerylist" component={GroceryHome} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
};

export default App;
