import React from 'react';
import '../styling/bill.scss';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Bill = () => {
    return (
        <div className='bill'>
            <NotificationsIcon className='bill__bill' />
            <div className='bill__dot'></div>
        </div>
    )
}

export default Bill;