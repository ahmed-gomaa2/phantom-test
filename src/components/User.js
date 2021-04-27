import React from 'react';
import '../styling/user.scss'
import ahmed from '../imgs/ahmed.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const User = () => {
    return (
        <div className='user'>
            <img className='user__avatar' src={ahmed} />
            <div className='user__info'>
                <div className='user__name'>Ahmed Gomaa</div>
                <div className='user__email'>engahedgomaa97@gmail.com</div>
            </div>
            <ExpandMoreIcon className='header__arrow' />

        </div>
    )
}

export default User;