import React, { useEffect, useState } from 'react';
import Header from '../Shared/Navbar/Navbar';
import ProductDetails from './ProductDetails/ProductDetails';

const BidPage = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Hridoy3519/json-data/main/products.json')
        .then(res => res.json())
        .then(data => setProduct(data[0]))
    },[])
    return (
        <div>
            <Header/>
            <ProductDetails product={product}></ProductDetails>
        </div>
    );
};

export default BidPage;