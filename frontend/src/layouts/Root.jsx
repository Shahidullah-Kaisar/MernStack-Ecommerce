import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';


const Root = () => {
    return (
        <>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <Navbar></Navbar>
                <SearchBar></SearchBar>
                <Outlet></Outlet>
                <Footer></Footer> 
            </div>
            
        </>
    );
};

export default Root;