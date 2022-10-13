import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/1.png";
import TrackVisibility from 'react-on-screen';
import './home.css';

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Soy Desarrollador Web."];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="home" id="inicio">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <br></br><br></br>
                  <span className="tagline">¡Bienvenido a mi Portfolio!</span>
                  <h1 class="fs-1">{`Hola! mi nombre es:`}
                  <br></br><h1 className="nombre">Oscar <span className="apellido">Avelar</span> </h1>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Soy Desarrollador Web." ]'><span className="wrap">{text}</span></span></h1><br></br>
                    <a type="button" download="avelarjr77.pdf" href="avelarjr77.pdf" class="btn btn-outline-light btn-rounded" data-mdb-ripple-color="dark">Descargar CV</a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" width="500" height="500" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <br></br>
    </section>
  )
}