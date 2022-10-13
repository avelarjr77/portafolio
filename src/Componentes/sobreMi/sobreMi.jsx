import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export default function SobreMi() {
    return (
        <section id='SobreMi'>
            <br></br><br></br>
            <h2>Sobre mí</h2>
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} >
                    <h3>Ingeniero en Ciencias de la computación</h3>
                        <h5>
                            Nacido en el Salvador, residiendo en Santa Ana.
                        </h5>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}