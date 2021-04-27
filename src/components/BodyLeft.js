import React from 'react';
import '../styling/bodyLeft.scss';
import Statistics from './Statistics';
import Table from './Table';

const products = [
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'success'
    },
    {
        date: '22 Feb 2021',
        product: 'Jordan 11 Retro Jubilee',
        size: '9.0',
        website: 'footlocker.uk',
        price: '$299',
        status: 'failure'
    },
]

const BodyLeft = () => {
    return (
        <div className='bodyLeft'>
            <Statistics />
            <Table products={products} />
        </div>
    )
}

export default BodyLeft;