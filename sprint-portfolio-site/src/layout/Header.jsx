import React from "react";

import Nav from "react-bootstrap/Nav";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Nav>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    </>
  );
}

export default Header;
