import React from 'react';
import '../styling/dashboard.scss'
import Body from './Body';
import Header from './Header'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Header />
            <Body />
        </div>
    )
}

export default Dashboard;