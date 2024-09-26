import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://fathomless-tor-15212.herokuapp.com/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className="my-5">
      <div className="section-title">Latest Auctions</div>
      <Row xs={1} md={4} className="g-4">
        {products.map((pd) => (
          <ProductCard key={products._id} product={pd}></ProductCard>
        ))}
      </Row>
    </Container>
  );
};

export default HomeProducts;
