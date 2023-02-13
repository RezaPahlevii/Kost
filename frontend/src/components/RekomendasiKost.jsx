import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import rumah from "./../image/rumah.jpg";

const RekomendasiKost = () => {
  return (
    <div>
      <Container>
        <Card className="mt-5 pt-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={rumah} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RekomendasiKost;
