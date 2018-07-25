import React, { Component } from "react"
import { Carousel } from "react-bootstrap"
import { Grid, Row, Col } from 'react-bootstrap';
import "./Resources.css"
import AdditionGame from "../../pages/AdditionGame";
import Bbc from "../images/bbc.png"
import Discovery from "../images/discovery.png"
import Funbrain from "../images/funbrain.png"
import Genius from "../images/genius.png"
import National from "../images/national.png"
import Time from "../images/time.png"
import GamePic from "../images/gamepic.png"
import Placeholder from "../images/placeholder.png"



export default class Resources extends Component {
    render() {
        return (
            <Grid>
                <Row >
                    <div className="carouseltime">
                        <Col md={5} className="resourcesection">
                            <h2> Resources: </h2>
                            <Carousel>
                                <Carousel.Item>
                                    <a href="http://www.funbrain.com/"> <img alt="500x450" src={Funbrain} /> </a>
                                    <Carousel.Caption>
                                        <h3>FunBrain</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <a href="http://www.bbc.co.uk/history/forkids/index.shtml" > <img alt="500x450" src={Bbc} /> </a>
                                    <Carousel.Caption>
                                        <h3>BBC</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <a href="http://discoverymindblown.com/" >  <img alt="500x450" src={Discovery} /> </a>
                                    <Carousel.Caption>
                                        <h3>Discovery Kids</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <a href="https://kids.nationalgeographic.com/" >  <img alt="500x450" src={National} /> </a>
                                    <Carousel.Caption>
                                        <h3>National Geographic Kids</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <a href="https://www.timeforkids.com/" >   <img alt="500x450" src={Time} /> </a>
                                    <Carousel.Caption>
                                        <h3>Time for Kids</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <a href="http://www.makemegenius.com/" >   <img alt="500x450" src={Genius} /> </a>
                                    <Carousel.Caption>
                                        <h3>Make Me Genius</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={1} className="blank">
                        </Col>
                        <Col md={5}  className="gamesection">
                            <h2> Games: </h2>
                            <Carousel>
                                <Carousel.Item>
                                    <a href={AdditionGame}> <img alt="500x350" src={GamePic} /> </a>
                                    <Carousel.Caption>
                                        <h3>Addition Game</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img alt="500x450" src={Placeholder} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img alt="500x450" src={Placeholder} />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </div>
                </Row>
            </Grid >

        )
    }
}