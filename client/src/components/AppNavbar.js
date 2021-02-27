import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/meals">Meal Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/grocerylist">My Grocery List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
