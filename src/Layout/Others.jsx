import React from 'react';

import Footer from '../Pages/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';


const Others = () => {
    return (
        <div>
            <NavBar></NavBar>
         
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Others;