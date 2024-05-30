import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const { project } = location.state || {};

  return (
    <Container fluid>
      <Row className='my-1'>
        <Col lg={6}>
          <Image className="card-transition" fluid src={project.img} alt={project.heading} />
        </Col>
        <Col lg={6}>
          <h3><i>{project.heading}</i></h3>
          <p><i>{project.paragraph}</i></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
