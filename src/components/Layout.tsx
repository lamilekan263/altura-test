import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div className='p-4 bg-black'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;