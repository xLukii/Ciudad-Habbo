import React from 'react';
import Header from '../Header/Header';
import Hoteles from '../Hoteles/Hoteles';
import { Container, Row, Col, Card } from 'react-bootstrap';


class Home extends React.Component {
     render(){
          return(
               <React.Fragment>
                    <Header />

                    <Container>
                         <Row>
                              <Col>
                                   <Card>
                                        <Card.Header>Hoteles más votados</Card.Header>

                                        <Card.Body>                                             
                                             <Card.Text>
                                                  <Hoteles />
                                             </Card.Text>
                                        </Card.Body>
                                   </Card>
                              </Col>

                              <Col>
                                   <Card>
                                        <Card.Header>Hoteles al azar</Card.Header>

                                        <Card.Body>                                             
                                             <Card.Text>
                                                  <Hoteles />
                                             </Card.Text>
                                        </Card.Body>
                                   </Card>
                              </Col>
                         </Row>
                    </Container>
               </React.Fragment>
          )
     }
}

export default Home;