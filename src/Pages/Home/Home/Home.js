import React from 'react';
import Header from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import UserBenefit from '../UserBenefit/UserBenefit';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <UserBenefit></UserBenefit>
        </>
    );
};

export default Home;