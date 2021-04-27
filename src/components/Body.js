import React from 'react';
import '../styling/body.scss';
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';

const Body = () => {
    return (
        <div className='body'>
            <BodyLeft />
            <BodyRight />
        </div>
    )
}

export default Body;