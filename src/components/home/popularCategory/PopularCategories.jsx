import React from 'react';
import PopularCategory from './PopularCategory';
import vagetable from '/images/vagetable.jpg'
import fruit from '/images/fruits.jpg'
import fish from '/images/fish.jpg'
import stationary from '/images/stationary.jpg'

const PopularCategories = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 gap-10 place-items-center'>
            <PopularCategory categoryName='Vegetable' image={vagetable}></PopularCategory>
            <PopularCategory categoryName='Fruits' image={fruit}></PopularCategory>
            <PopularCategory categoryName='Fish' image={fish}></PopularCategory>
            <PopularCategory categoryName='Stationary' image={stationary}></PopularCategory>
        </div>
    );
};

export default PopularCategories;