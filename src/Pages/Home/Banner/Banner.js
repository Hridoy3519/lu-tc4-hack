import React from 'react';
import './Banner.css';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import bannerImg from '../../../images/banner-img.jpg';
import bannerWatch from '../../../images/banner-watch.png';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    return (
        <Container fluid style={{ padding: '0px' }}>
            <Row style={{ margin: '0px', width: '100%', position: 'relative' }}>
                <Col id="banner-left" xs={12} md={6} style={{ padding: '0px' }}>
                    <img style={{
                        width: "100%"
                    }} src={bannerImg} alt="" />
                </Col>
                <Col xs={12} md={6} style={{ padding: '0px' }}>

                    <div className="sm-img-div">
                        <div className="watch-img-sm">
                            <img style={{
                                width: "100%"
                            }} src={bannerWatch} alt="" />
                        </div>
                    </div>

                    <div className="banner-right">
                        <div>
                            <h1 className="banner-quote">
                                Tick Tick Ticking<br />
                                Time to Bidding
                            </h1>

                            <p className="banner-text">
                                Time is passing by start Bidding to get your desired item.
                            </p>
                            {/* <div className="banner-btn">
                                <Nav.Link className="primary-btn" as={HashLink} to="/#smallCollection" >Shop Now</Nav.Link>
                            </div> */}
                        </div>
                    </div>
                </Col>


                <div className="d-flex w-100 h-100 justify-content-center align-items-center watch-Img-div">
                    <div className="watch-img">
                        <img style={{
                            width: "100%"
                        }} src={bannerWatch} alt="" />
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Banner;