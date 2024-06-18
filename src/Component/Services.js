import {Row, Image, Col, Card, Button, Container, } from "react-bootstrap";
import { services } from "./Data";

function Services() {
    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                    <Image src={require('../Component/Images/solar-services.png')} fluid />
                </Col>
            </Row>
            <Row>
            {services.map(d => (
          <Col className="my-2" lg={4} md={6} sm={12} key={d.id}>
            <Card className="card-transition" style={{ width: '100%' }}>
              <Card.Img variant="top" src={d.img} />
              <Card.Body>
                <Card.Title><i>{d.heading}</i></Card.Title>
                <Button variant="primary" >More Info</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
            </Row>
            </Container>
        </>
    )
}
export default Services;