import React from "react";

import "./RootLayout.css";

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";

function RootLayout() {
  return (
    <>
      <Container fluid className="root_layout_main-container">
        <Header />
        <Container className="bg-success content">
          <Outlet />
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default RootLayout;
