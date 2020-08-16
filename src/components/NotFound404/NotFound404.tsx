import React from 'react';
import { ReactComponent as Rabbit404 } from '../../resources/Rabbit404.svg';
import './NotFound404.scss';

function NotFound404() {
    return(
        <div className='not-found'>
            <h1 className='not-found-title'>404</h1>
            <Rabbit404 className='rabbit-svg'/>
            <h3 className='not-found-description'>Only rabbits behind this door :(</h3>
        </div>
    );
}

export default NotFound404;