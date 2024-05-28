
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { pastproject } from "./Data";
import './App.css';   
import { useNavigate } from "react-router-dom";

function PastProjects() {
  const navigate=useNavigate();
    const handleOnchange=()=>{
    navigate('/details');
    }

    return (
        <>
            <Container>
                <h2 style={{ textAlign: 'center', fontFamily: 'Roboto Mono' }}><i>Past Projects</i></h2>

                 <Row>
                    {pastproject.map(d=>(
                        <Col className="my-2 " fluid lg={6} md={6} sm={12}>
                         <Card className="card-transition" style={{ width: '100%' }}>
                         <Card.Img variant="top" src={d.img} />
                         <Card.Body>
                           <Card.Title><i>{d.heading}</i></Card.Title>
                           <Button variant="primary" onClick={handleOnchange}>More Info</Button>
                         </Card.Body>
                       </Card>
                       </Col>
                    ))
                    }
                </Row> 
               
            </Container>
        </>
    );
}

export default PastProjects;
