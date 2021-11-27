import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from '../Home/ProductCard/ProductCard';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Navbar/Navbar';

const Auctions = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/Hridoy3519/json-data/main/products.json"
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <Header></Header>
            <Container className="mb-5">
                <div className="section-title">All Auctions</div>
                <Row xs={1} md={4} className="g-4">
                    {products.map((pd) => (
                        <ProductCard key={products.key} product={pd}></ProductCard>
                    ))}
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Auctions;