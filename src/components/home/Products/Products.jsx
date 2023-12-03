import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [items,setItems]= useState([]);
    
    useEffect(()=>{
        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data=>setItems(data))
    },[])
    
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-2 lg:gap-4 lg:space-y-4  mt-20'>
            {
                items.map(item=><Product product={item}></Product>)
            }
        </div>
    );
};

export default Products;