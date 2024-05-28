import React from "react";
import { Container,Col, Row, Image } from "react-bootstrap";
function Details(){
    return(
        <Container fluid>
         <Row className='my-2'>
         <Col lg={6}><Image fluid src={require('../Component/Images/Home-Solar-1.jpg')} />
        </Col>
        <Col lg={6}>
            <p>hjdfhuaj afuhaduig adgjaiughai gjduifguidhfgd fgiguiadfgdifgjadf erigjierjgidjgiajfg rigjdigjdifjidjfgiwj rgjiegjidf gjsigjiwrgj wgjwirgjwrigjwrigjwoig igjwiorgjw rgwrigjwiorg wigmw iwrjgiowjg wgijwiorgjwr g wgwirgjwor giwgj
            </p>
        </Col>
      </Row>
        </Container>
    )
}
export default Details;