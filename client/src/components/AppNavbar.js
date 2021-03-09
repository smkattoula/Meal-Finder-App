import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const AppNavbar = () => {
  const token = localStorage.getItem("token");

  const history = useHistory();

  const onLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const guestLinks = (
    <>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>{" "}
    </>
  );

  const authLinks = (
    <>
      <Nav.Link href="/" onClick={onLogout}>
        Logout
      </Nav.Link>
      <Nav.Link href="/grocerylist">My Grocery List</Nav.Link>{" "}
    </>
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/meals">Meal Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">{token ? authLinks : guestLinks}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
