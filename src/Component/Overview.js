import { Container, Row, Col, Image } from "react-bootstrap";

function Overview() {
    return (
        <Container >
            <h2 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}><i>Bill of Material On Solar System</i></h2>
            <Row>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image fluid src={require('../Component/Images/bills.png')} />
                </Col>
            </Row>
            <hr className="my-2"/>
            <h2 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}><i>Terms & Conditions</i></h2>
            <Row>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image fluid src={require('../Component/Images/terms-and-condtions.png')} />
                </Col>
            </Row>
            <Row>
                <hr className="my-2"/>
                <h2 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}><i>Manufacturing Area</i></h2>
                <Col lg={6} className="my-1">
                    <Image fluid className="card-transition" src={require("../Component/Images/Manufactaring-1.jpg")} />
                </Col>

                <Col lg={6} className="my-1">
                    <Image fluid className="card-transition" src={require("../Component/Images/Manufactaring-2.jpg")} />
                </Col>
            </Row>
            <hr/>
            <Row className="my-2">
                <Col>
                    <p><i>Hello! We are DADU-SOLAR, your trusted solar energy company. We provide high-quality solar panels and advanced solar system installation services. Our offerings include solar energy solutions for both residential and commercial clients. We are committed to reducing your energy costs and preserving the environment. Our expert team evaluates your location and ensures the installation of the most suitable solar system according to your needs. We work to the highest standards so that you can benefit from solar energy and achieve energy independence. Our services include the installation, maintenance, and repair of solar panels to ensure your system always performs at its best. Join us in stepping towards a green future with solar energy!</i></p>
                </Col>
            </Row>
        </Container>
    )
}
export default Overview;