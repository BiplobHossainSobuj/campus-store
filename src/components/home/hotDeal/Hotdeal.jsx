import React from 'react';
import Countdown from './Countdown';
import Products from '../Products/products';

const Hotdeal = () => {
    return (
        <div className='container place-content-center mx-auto my-24'>
            <div className='md:flex lg:flex justify-center lg:justify-between mx-auto'>
                <h1 className='lg:text-6xl text-4xl font-bold'>Flash Deal</h1>
                <Countdown></Countdown>
            </div>
            <div>
                <Products></Products>
            </div>
        </div>
    );
};

export default Hotdeal;