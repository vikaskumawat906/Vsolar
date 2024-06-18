import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';

function Home() {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleLearnMore = (event) => {
    setExpandedSection(expandedSection === event ? null : event);
  };
  function ExpandedSection({ title, details, onLearnMore }) {
    return (
      <Col lg={12} md={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h3 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}>{title}</h3>
          <p><i>{details}</i></p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ borderRadius: '8px' }} variant="secondary" onClick={onLearnMore}>Back Now</Button>{' '}
          </div>
        </div>
      </Col>
    );
  }

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
        {expandedSection === 'solar' ? (
          <ExpandedSection title="SOLAR PANELS" details="Solar panels have become a cornerstone of sustainable energy solutions, converting sunlight into electricity through photovoltaic (PV) cells. These cells, typically made from silicon, harness photons from the sun and generate a flow of electricity. Solar panels are available in various sizes and efficiencies, with standard residential panels typically producing between 250 to 400 watts of power. The overall capacity of a solar panel system is measured in kilowatts (kW). For example, a typical home installation might be around 5 kW, which can generate enough electricity to cover a significant portion of a household's energy needs, depending on location and energy consumption patterns.

          The efficiency of solar panels, which indicates the percentage of sunlight that can be converted into usable electricity, has improved significantly over the years. Modern panels often achieve efficiencies of 15-20%, with some high-end models exceeding 22%. Higher efficiency panels generate more electricity per square foot, making them ideal for homes with limited roof space.
          
          The cost of solar panels has decreased substantially in the past decade, making them more accessible to homeowners. On average, a residential solar panel system can cost between $10,000 and $30,000, depending on the size of the installation, the type of panels used, and the complexity of the installation process. This price includes not just the panels themselves but also inverters, mounting hardware, and installation labor. Many homeowners can take advantage of federal, state, and local incentives that reduce the initial cost, such as tax credits and rebates.
          
          Investing in solar panels not only lowers electricity bills but also contributes to environmental sustainability by reducing reliance on fossil fuels and decreasing greenhouse gas emissions. Over time, solar panel systems can pay for themselves through energy savings and increased property values. Furthermore, advancements in solar technology continue to improve the efficiency and affordability of solar panels, making them an increasingly viable option for households looking to adopt renewable energy solutions." onLearnMore={() => handleLearnMore('solar')} />
        ) : (
          <>
            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <h3 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}>SOLAR PANELS</h3>
                <p><i>Take a look and see why the panels we use<br /> are the best available! </i></p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button style={{ borderRadius: '8px' }} variant="primary" onClick={() => handleLearnMore('solar')}>Learn More</Button>{' '}
                </div>
              </div>
            </Col>
            <Col>
              <Image fluid src={require('../Component/Images/Home-Solar-1.jpg')} />
            </Col>
          </>
        )}
      </Row>

      <Row className='my-5'>
        {expandedSection === 'battery' ? (
          <ExpandedSection title="BATTERY" details="Solar batteries have revolutionized the way we harness and utilize solar energy, making it possible to store excess energy generated during the day for use at night or during cloudy periods. These batteries come in various capacities, typically measured in kilowatt-hours (kWh). For instance, a common residential solar battery might have a capacity of around 10 kWh, which is sufficient to power essential household appliances and lighting for several hours during a power outage. The capacity you need depends on your household's energy consumption patterns and the size of your solar panel system. Larger homes or those with higher energy demands might require multiple batteries or larger capacity batteries, such as 20 kWh or even 30 kWh units.

          The price of solar batteries varies significantly based on capacity, brand, and technology. On average, a 10 kWh solar battery can cost between $5,000 and $7,000, including installation. This price can go up to $10,000 or more for higher-capacity batteries or those with advanced features such as smart energy management systems and integration with home automation. Despite the initial investment, solar batteries can provide substantial long-term savings by reducing reliance on grid electricity, especially in regions with high electricity rates or frequent power outages. Additionally, many governments and local utilities offer incentives, rebates, or tax credits that can help offset the cost of installation.
          
          In addition to financial benefits, solar batteries contribute to environmental sustainability by maximizing the use of renewable energy. By storing and utilizing solar energy more efficiently, households can significantly reduce their carbon footprint. Moreover, advancements in battery technology continue to improve the efficiency, lifespan, and safety of solar batteries, making them a viable and increasingly popular option for energy storage. As the technology progresses and becomes more widespread, the cost is expected to decrease, further encouraging the adoption of solar battery systems in residential and commercial settings." onLearnMore={() => handleLearnMore('battery')} />
        ) : (
          <>
            <Col>
              <Image fluid src={require('../Component/Images/Home-Solar-2.jpg')} />
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <h3 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}>BATTERY </h3>
                <p><i>Learn about all the benefits that energy<br />storage can provide you! </i></p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button style={{ borderRadius: '8px' }} variant="primary" onClick={() => handleLearnMore('battery')}>Learn More</Button>{' '}
                </div>
              </div>
            </Col>
          </>
        )}
      </Row>

      <Row className='my-5'>
        {expandedSection === 'roof' ? (
          <ExpandedSection title="ROOF SOLAR" details="Roof solar systems have become an increasingly popular and practical solution for harnessing renewable energy directly from the sun. By installing photovoltaic (PV) panels on the roof, homeowners can generate electricity to power their homes, reducing their reliance on traditional fossil fuels and decreasing their electricity bills. Roof solar systems are particularly advantageous as they utilize existing roof space, which is typically underutilized, and can be tailored to fit various roof types and sizes.

          A standard residential roof solar system usually ranges between 3 kW and 10 kW, depending on the household's energy needs, roof size, and available sunlight. For example, a 5 kW system can generate around 6,000 to 7,000 kilowatt-hours (kWh) annually, which is sufficient to cover the average energy consumption of a typical household. The efficiency of the solar panels plays a crucial role in determining the overall energy output. Modern panels typically achieve efficiencies between 15-20%, with some advanced models exceeding 22%, allowing for more energy production in a limited space.
          
          The cost of installing a roof solar system has decreased significantly in recent years. On average, the installation cost can range from $10,000 to $30,000 for a typical residential system, depending on the size, type of panels, and complexity of the installation. This cost includes the panels, inverters, mounting hardware, and installation labor. Many governments and local utilities offer incentives such as tax credits, rebates, and solar renewable energy certificates (SRECs), which can substantially offset the initial investment.
          
          In addition to financial savings, roof solar systems contribute to environmental sustainability by reducing carbon footprints and reliance on non-renewable energy sources. Over time, the investment in solar can lead to substantial savings on electricity bills and even generate income through net metering programs, where excess electricity produced by the solar panels is sold back to the grid. As technology advances, the efficiency and affordability of roof solar systems continue to improve, making them a smart and eco-friendly choice for homeowners looking to embrace renewable energy." onLearnMore={() => handleLearnMore('roof')} />
        ) : (
          <>
            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <h3 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}>Roof Solar</h3>
                <p><i>You know all about Roof Solar<br />Click on learn more</i></p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button style={{ borderRadius: '8px' }} variant="primary" onClick={() => handleLearnMore('roof')}>Learn More</Button>{' '}
                </div>
              </div>
            </Col>
            <Col>
              <Image fluid src={require('../Component/Images/Home-Solar-3.jpg')} />
            </Col>
          </>
        )}
      </Row>
      <Row className='small-project-img'>
      <hr/>
        <Row>
        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1><i> Small Projects</i></h1>
        </Col>
        </Row>
        <Col>
        <div className='small-project'>
        <Image src={require('../Component/Images/small project-1.jpg')}/>
        <Image src={require('../Component/Images/small project-2.jpg')}/>
        <Image src={require('../Component/Images/small project-3.jpg')}/>
        <Image src={require('../Component/Images/small project-4.jpg')}/>
        <Image src={require('../Component/Images/small project-5.jpg')}/>
        </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1><i> Our Branches &#x1F5FA;</i></h1>
        </Col>
      </Row>
      <Row lg={4} md={2} xs={2}>
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
  );
}

export default Home;
