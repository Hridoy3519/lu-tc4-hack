import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const { img, name, category, place, currentBid, key } = product;
  return (
    <Col>
      <Card className="home-product-card h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <div className="d-flex justify-content-between product-card-upper">
            <p>
              <i class="far fa-dot-circle"></i> {category}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> {place}
            </p>
          </div>
          <Card.Title className="title text-start">{name}</Card.Title>
          <Card.Text>
            <div className="text-start d-flex justify-content-between">
              <h4 className="current-bid">৳ {currentBid}</h4>
              <NavLink to={`bidPage/${key}`}>
                <button className="primary-btn card-btn">Bid Now</button>
              </NavLink>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
