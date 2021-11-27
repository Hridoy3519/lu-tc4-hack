import React from "react";
import {
  Col,
  Container,
  Navbar,
  Row,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import "./ProductDetails.css";
import DateCountdown from 'react-date-countdown-timer';
const ProductDetails = ({ product }) => {
  const { img, name, currentBid, startingBid } = product;
  



  return (
    <div>
      <Navbar />
      <PageHeader page="Product Details"></PageHeader>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={5}>
            <div className="d-flex justify-content-center align-items-center">
              <img className="img-fluid w-75" src={img} alt="" />
            </div>
            <Row className="mt-3 small-pic">
              <Col sm={4} className="text-center">
                <img className="w-75" src={img} alt="" />
              </Col>
              <Col sm={4} className="text-center">
                <img className="w-75" src={img} alt="" />
              </Col>
              <Col sm={4} className="text-center">
                <img className="w-75" src={img} alt="" />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={7} className="text-start">
            <h2>{name}</h2>
            <h4 className="bid-text">Starting Bid : ${startingBid}.00</h4>
            <Card className="purchase-form shadow-lg my-5 p-5">
              <div className="d-flex justify-content-between mb-3">
                <h4>Current Bid</h4>
                <h3 className="big-font">৳{currentBid}.00</h3>
              </div>
              <div className="d-flex justify-content-between">
                <h4>Active Bidders</h4>
                <h3 className="big-font">69</h3>
              </div>
              <div class="choose-dis mt-4">
                <h4>No of Days Left for Bidding</h4>
              </div>
            </Card>
            <div className="mt-5">
              <Form className="d-flex justify-content-between">
                <Form.Group
                  className="mb-3 bid-input"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="bid-field"
                    type="email"
                    placeholder="Enter Your Bid Here"
                  />
                </Form.Group>
                <div>
                  <button className="primary-btn card-btn">Place Bid</button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <div className="text-start"></div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;
