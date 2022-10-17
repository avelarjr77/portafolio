import Skill30 from "../assets/img/30.svg";
import Skill40 from "../assets/img/40.svg";
import Skill65 from "../assets/img/65.svg";
import Skill75 from "../assets/img/75.svg";
import Skill85 from "../assets/img/85.svg";
import Skill80 from "../assets/img/80.svg";
import Skill90 from "../assets/img/90.svg";
import Skill95 from "../assets/img/95.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from "react";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Conocimientos & habilidades:<br></br></p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={Skill90} />
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill95} />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill75} />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill85} />
                                    <h5>MySql</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill65} />
                                    <h5>NodeJs</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill30} />
                                    <h5>JavaScritp</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill80} />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill80} />
                                    <h5>Codeigniter 4</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill65} />
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill40} />
                                    <h5>Laravel</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill85} />
                                    <h5>Illustrador</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill80} />
                                    <h5>Photoshop</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill90} />
                                    <h5>SCRUM</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}