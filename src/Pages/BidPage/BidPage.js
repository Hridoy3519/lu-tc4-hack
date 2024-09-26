import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Navbar/Navbar';
import ProductDetails from './ProductDetails/ProductDetails';

const BidPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://fathomless-tor-15212.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <div>
            <Header />
            <ProductDetails product={product}></ProductDetails>
        </div>
    );
};

export default BidPage;