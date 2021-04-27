import React from 'react';
import '../styling/header.scss'
import User from './User';
import Bill from './Bill';

const Header = () => {
    return (
        <div className='header'>
            <Bill />
            <User />
        </div>
    )
}

export default Header;