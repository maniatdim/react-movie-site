import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import sliderFirst from "../images/looper.webp";

const Cards = () => {
  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center d-md-flex mx-auto">
            <Card
              style={{
                width: "25rem",
                top: "20px",
                marginRight: "20px",
                marginLight: "20px",
                marginBottom: "20px",
              }}
            >
              <Card.Img variant="top" src={sliderFirst} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "25rem",
                top: "20px",
                marginRight: "20px",
                marginLight: "20px",
                marginBottom: "20px",
              }}
            >
              <Card.Img variant="top" src={sliderFirst} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>{" "}
            <Card
              style={{
                width: "25rem",
                top: "20px",
                marginRight: "20px",
                marginLight: "20px",
                marginBottom: "20px",
              }}
            >
              <Card.Img variant="top" src={sliderFirst} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>{" "}
            <Card
              style={{
                width: "25rem",
                top: "20px",
                marginRight: "20px",
                marginLight: "20px",
                marginBottom: "20px",
              }}
            >
              <Card.Img variant="top" src={sliderFirst} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
