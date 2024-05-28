import { Container, Row, Col, Image } from "react-bootstrap";

function Overview() {
    return (
        <Container >
            <Row fluid className="my-1">
                <Col  lg={6}>
                    <Image className="card-transition" fluid src={require("../Component/Images/HeadOffice-image.jpg")} />
                </Col>
                <Col  lg={6}>
                    <h2 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}><i>Head-Office</i></h2>
                    <Row fluid>
                        <Col>
                            <h4><i>Location</i></h4>
                            <div>
                                Gali No-4,<br />
                                Panchyawala (302034),<br />
                                Jaipur (Rajasthan),<br />
                                India
                            </div>
                        </Col>
                        <Col>
                        <h4><i>Scan Location</i></h4>
                        <Image fluid  src={require("../Component/Images/location-QR.jpg")} />
                        </Col>
                    </Row>
                    <Row>
                       <Col>
                       <p>Any more enqiury you can Call or Mail 24x7 for any information<br/>
                       +91-9461306365<br/>
                       vikaskumawat9026@gmail.com
                       </p>
                       </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <hr/>
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
                <p><i>Hello! We are V-Solar, your trusted solar energy company. We provide high-quality solar panels and advanced solar system installation services. Our offerings include solar energy solutions for both residential and commercial clients. We are committed to reducing your energy costs and preserving the environment. Our expert team evaluates your location and ensures the installation of the most suitable solar system according to your needs. We work to the highest standards so that you can benefit from solar energy and achieve energy independence. Our services include the installation, maintenance, and repair of solar panels to ensure your system always performs at its best. Join us in stepping towards a green future with solar energy!</i></p>
                </Col>
            </Row>
        </Container>
    )
}
export default Overview;