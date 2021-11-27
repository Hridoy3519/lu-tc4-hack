import React from 'react';
import Header from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import UserBenefit from '../UserBenefit/UserBenefit';
import HomeProducts from '../HomeProducts/HomeProducts';
const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <UserBenefit></UserBenefit>
            <HomeProducts/>
        </>
    );
};

export default Home;