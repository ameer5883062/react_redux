import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";

const Home = () => {
  const Products = [
    {
      image: "images/image_1.png",
      name: "Man Joggers",
      price: "1999",
    },
    {
      image: "images/image_2.png",
      name: "Man Coat",
      price: "2499",
    },
    {
      image: "images/image_3.jpg",
      name: "Realmi Mobile",
      price: "24999",
    },
    {
      image: "images/image_4.jpg",
      name: "Rolex Watche",
      price: "999",
    },
  ];

  return (
    <>
      <Header />

      <Container className="mt-5">
        <Row>
          {Products.map((item) => (
            <Col lg={3} md={6} sm={12}>
              <Card className="Card shadow-lg">
                <Card.Img
                  variant="top"
                  className="CardImage"
                  src={item.image}
                />
                <hr className="mx-3" />
                <Card.Body className="mt-0 pt-0 mx-1">
                  <Row>
                    <Col>
                      <Card.Title className="ProductName">
                        {item.name}
                      </Card.Title>
                    </Col>
                    <Col className="text-end">
                      <Card.Title className="ProductPrice">
                        ${item.price}
                      </Card.Title>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Button variant="dark">Add To Cart</Button>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
