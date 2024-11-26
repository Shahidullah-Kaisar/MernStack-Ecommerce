import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';

const Root = () => {
    return (
        <>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Hero></Hero>
                <LatestCollection></LatestCollection>
                <BestSeller></BestSeller>
            </div>
            
        </>
    );
};

export default Root;