import React from 'react';
import Countdown from './Countdown';

const Hotdeal = () => {
    return (
        <div className='container mx-auto my-24'>
            <div className='flex  justify-between'>
                <h1 className='text-6xl font-bold'>Flash Deal</h1>
                <Countdown></Countdown>
            </div>
        </div>
    );
};

export default Hotdeal;