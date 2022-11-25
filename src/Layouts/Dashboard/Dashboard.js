import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Pages/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex flex-col lg:flex-row px-10 gap-5 h-screen overflow-y-scroll'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;