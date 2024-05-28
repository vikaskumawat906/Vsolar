import Carousel from 'react-bootstrap/Carousel';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';
function Home() {
  return (
    <Container fluid className='my-1'>
      <Carousel>
        <Carousel.Item>
          <Image className="d-block w-100 custom-image" src={require('../Component/Images/Slider-1.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100 custom-image" src={require('../Component/Images/Slider-2.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100 custom-image" src={require('../Component/Images/Slider-3.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100 custom-image" src={require('../Component/Images/Slider-4.jpg')} />
        </Carousel.Item>
      </Carousel>
      <Row className='my-5'>
        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <h3 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}>SOLAR PANELS</h3>
            <p><i>Take a look and see why the panels we use<br /> are the best available! </i></p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button style={{ borderRadius: '8px' }} variant="primary">Learn More</Button>{' '}
            </div>
          </div>
        </Col>
        <Col><Image className="d-block w-100 custom-image " src={require('../Component/Images/Home-Solar-1.jpg')} />
        </Col>
      </Row>
      <Row className='my-5'>
        <Col ><Image className="d-block w-100 custom-image " src={require('../Component/Images/Home-Solar-2.jpg')} />
        </Col>
        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <h3 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}>BATTERY </h3>
            <p><i>Learn about all the benefits that energy<br />storage can provide you! </i></p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button style={{ borderRadius: '8px' }} variant="primary">Learn More</Button>{' '}
            </div>
          </div>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <h3 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}>ABOUT US</h3>
            <p><i>You know all about us the V-Solar System<br />Click on learn more</i></p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button style={{ borderRadius: '8px' }} variant="primary">Learn More</Button>{' '}
            </div>
          </div>
        </Col>
        <Col><Image className="d-block w-100 custom-image" src={require('../Component/Images/Home-Solar-3.jpg')} />
        </Col>
      </Row>
      <hr />
      <Row><Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1><i> Our Branches &#x1F5FA;</i></h1></Col></Row>
      <Row lg={4} md={2}  xs={2}>
        <Col>
          <Image className="d-block w-100 custom-image my-1" src={require('../Component/Images/Location-1.jpg')} />
        </Col>
        <Col>
          <Image className="d-block w-100 custom-image my-1" src={require('../Component/Images/Location-2.jpg')} />
        </Col>
        <Col>
          <Image className="d-block w-100 custom-image my-1" src={require('../Component/Images/Location-3.jpg')} />
        </Col>
        <Col>
          <Image className="d-block w-100 custom-image my-1" src={require('../Component/Images/Location-4.jpg')} />
        </Col>
      </Row>
    </Container>
  )
}
export default Home;