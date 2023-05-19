import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Pages/Footer';
import NavBar from '../Pages/NavBar/NavBar';
import Gallery from '../Pages/Gallery';
import Category from '../Pages/Category/Category';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Gallery></Gallery>
            <Category></Category>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;