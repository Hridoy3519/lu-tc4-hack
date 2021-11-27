import React from 'react';
import { Container } from 'react-bootstrap';

const ProductDetails = ({product}) => {
    const {img} = product;
    return (
        <Container>
            <img className="w-100" src={img} alt=""/>
        </Container>
    );
};

export default ProductDetails;