import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Pages/Footer';
import NavBar from '../Pages/NavBar/NavBar';
import Gallery from '../Pages/Gallery';
import Category from '../Pages/Category/Category';
import ChildsZone from '../Pages/ChildsZone';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Gallery></Gallery>
            <Category></Category>
            <ChildsZone></ChildsZone>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;