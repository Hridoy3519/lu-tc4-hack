import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./UserBenefit.css";

const UserBenefit = () => {
    return (
        <div className="user-benefit">
            <Card className="bg-dark text-white mt-3 mt-md-5">
                <Card.Img src="https://i.ibb.co/6vFf0pc/hiw-bg.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Row>
                        <Col xs={6}>
                            <div className="lawson-details">
                                <div className="lawson-title">
                                    User Benefits
                                </div>
                                <ul className="lawson-text">
                                    <li className="lawson-point">
                                        Participate in auctions
                                    </li>
                                    <li className="lawson-point">
                                        Submit your ads
                                    </li>
                                    <li className="lawson-point">
                                        Promote your ads
                                    </li>
                                    <li className="lawson-point">
                                        Get reviewed to become noticeable
                                    </li>
                                    <li className="lawson-point">
                                        Save favorite ads
                                    </li>
                                    <li className="lawson-point">
                                        And more
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div >
                                <img className="monitor-img" src="https://i.ibb.co/vz6hQYs/iii.png" alt="" />
                            </div>
                        </Col>
                    </Row>


                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default UserBenefit;