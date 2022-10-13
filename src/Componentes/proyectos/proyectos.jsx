import React, { useState } from 'react';
import './proyectos.css';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Correspondencia1 from "../../assets/img/imgProyectos/correspondencia/Captura de pantalla (462).png";
import Correspondencia2 from "../../assets/img/imgProyectos/correspondencia/Captura de pantalla (464).png";
import Correspondencia3 from "../../assets/img/imgProyectos/correspondencia/Captura de pantalla (466).png";
import Correspondencia4 from "../../assets/img/imgProyectos/correspondencia/Captura de pantalla (468).png";
import Correspondencia5 from "../../assets/img/imgProyectos/correspondencia/Captura de pantalla (469).png";
import Correspondencia6 from "../../assets/img/imgProyectos/correspondencia/Captura de pantalla (470).png";
import Correspondencia7 from "../../assets/img/imgProyectos/correspondencia/Captura de pantalla (460).png";
import ControlEquipos from "../../assets/img/imgProyectos/controlEquipos/Captura de pantalla (483).png";
import Restaurante from "../../assets/img/imgProyectos/restaurante/Captura de pantalla (480).png";


export default function Proyectos(props) {
    const [lgShow1, modalCorrespondencia] = useState(false);
    const [lgShow2, modalEquipos] = useState(false);
    const [lgShow3, setModalShow] = useState(false);

    return (
        <section id='proyectos'>
            <h2>Proyectos</h2>
            <h4>Algunos de mis proyectos de Desarrollo Web</h4>
            <br></br>
            <h5>Una muestra de mis trabajos, desde el año 2010 hasta laactualidad.
                <br></br>
                Haz clic sobre cada uno para ver mas información.</h5>
            <br></br>
            <div className="container sobremi">
                <div className='row'>
                    <div className='col-sm-4'>
                        <Card bg='dark' style={{ width: '18rem', height: '21rem' }}>
                            <Card.Img variant="top" src={Correspondencia1} />
                            <Card.Body>
                                <Card.Title>Sistema Workflow de Correspondencia</Card.Title>
                                <Card.Text>
                                    <h6>
                                        <li>Codeigniter 4</li>
                                    </h6>
                                </Card.Text>
                                <Button variant="outline-light" onClick={() => modalCorrespondencia(true)}>Ver info.</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm-4'>
                        <Card bg='dark' style={{ width: '18rem', height: '21rem' }}>
                            <Card.Img variant="top" src={ControlEquipos} />
                            <Card.Body>
                                <Card.Title>Sistema Control de Equipos</Card.Title>
                                <Card.Text>
                                    <h6>
                                        <li>PHP</li>
                                        <br></br>
                                    </h6>
                                </Card.Text>
                                <Button variant="outline-light" onClick={() => modalEquipos(true)}>Ver info.</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm-4'>
                        <Card bg='dark' style={{ width: '18rem', height: '21rem' }}>
                            <Card.Img variant="top" src={Restaurante} />
                            <Card.Body>
                                <Card.Title>Sistema de Restaurante</Card.Title>
                                <Card.Text>
                                    <h6>
                                        <li>Angular</li>
                                        <br></br>
                                    </h6>
                                </Card.Text>
                                <Button variant="outline-light" onClick={() => setModalShow(true)}>Ver info.</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={lgShow1}
                onHide={() => modalCorrespondencia(false)}
                className='my-modal'
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Correspondencia1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Correspondencia2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Correspondencia3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Correspondencia4}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Correspondencia5}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Correspondencia6}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Correspondencia7}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={lgShow2}
                onHide={() => modalEquipos(false)}
                className='my-modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ControlEquipos}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ControlEquipos}
                                alt="First slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ControlEquipos}
                                alt="First slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            <br></br>
            <br></br>
        </section>
    )
}
