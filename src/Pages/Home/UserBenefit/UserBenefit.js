import React from 'react';
import { Card, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./UserBenefit.css";

const UserBenefit = () => {
    return (
        <div className="user-benefit">
            <Card className="bg-dark text-white mt-3 mt-md-5">
                <Card.Img src="https://i.ibb.co/6vFf0pc/hiw-bg.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <div className="lawson-details">
                        <div className="lawson-title">
                            User Benefits
                        </div>
                        <ul className="lawson-text">
                            <li>
                                Participate in auctions
                            </li>
                            <li>
                                Submit your ads
                            </li>
                            <li>
                                Promote your ads
                            </li>
                            <li>
                                Get reviewed to become noticeable
                            </li>
                            <li>
                                Save favorite ads
                            </li>
                            <li>
                                And more
                            </li>
                        </ul>
                        <Nav.Link className="secondary-btn lawson-btn" as={HashLink} to="/#smallCollection" >Shop Collection</Nav.Link>
                    </div>


                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default UserBenefit;