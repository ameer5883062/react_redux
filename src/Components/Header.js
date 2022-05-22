import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Container className="HeaderBackground shadow-lg rounded mt-3 p-3">
        <Row>
          <Col md={6} sm={12}>
            <h1 className="Heading">React Redux</h1>
          </Col>
          <Col md={6} sm={12} className="text-end">
            <BsFillCartFill className="CartIcon mt-2" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
