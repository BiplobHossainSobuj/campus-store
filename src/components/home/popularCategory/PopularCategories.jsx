import React from 'react';
import PopularCategory from './PopularCategory';
import vagetable from '../../../../public/images/vagetable.jpg'
import fruit from '../../../../public/images/fruits.jpg'
import fish from '../../../../public/images/fish.jpg'
import stationary from '../../../../public/images/stationary.jpg'

const PopularCategories = () => {
    return (
        <div className='container mx-auto grid grid-cols-4 mb-10 gap-10 place-items-center'>
            <PopularCategory categoryName='Vegetable' image={vagetable}></PopularCategory>
            <PopularCategory categoryName='Fruits' image={fruit}></PopularCategory>
            <PopularCategory categoryName='Fish' image={fish}></PopularCategory>
            <PopularCategory categoryName='Stationary' image={stationary}></PopularCategory>
        </div>
    );
};

export default PopularCategories;