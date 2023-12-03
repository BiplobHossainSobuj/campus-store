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
        <div className='grid grid-cols-4 gap-y-4  mt-20'>
            {
                items.map(item=><Product product={item}></Product>)
            }
        </div>
    );
};

export default Products;