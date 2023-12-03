import React from 'react';

const Product = ({ product }) => {
    const { name,price,image } = product
    return (
        <div className="card card-compact w-[360px] bg-base-100 shadow-md">
            <figure><img className='h-[220px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;