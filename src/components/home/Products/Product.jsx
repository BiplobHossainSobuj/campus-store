import React, { useState } from 'react';

const Product = ({ product }) => {
    const { name,price,image } = product;
    const [item,setItem] = useState([]);
    const cartContainer = document.getElementById('cart-container');
    const priceContainer = document.getElementById('price-total');
    const itemBadge = document.getElementById('item-badge');
    
    const addToCard =(itemName,itemPrice)=>{
        itemName= name;
        itemPrice = price;
        let badge = parseInt(itemBadge.innerText);
        const previousTotalStr = priceContainer.innerHTML;
        const previousTotalNumber = parseFloat(previousTotalStr);
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.innerHTML=`<h3>${itemName}:${itemPrice}</h3>`
        ul.appendChild(li);
        cartContainer.appendChild(ul);
        setItem(itemName,itemPrice);
        const newPriceStr = itemPrice;
        const newPriceNumber = parseFloat(newPriceStr);
        const total = previousTotalNumber + newPriceNumber;
        priceContainer.innerHTML=total;
        badge++;
        itemBadge.innerText = badge;

        console.log(itemName,itemPrice,badge)
    }
    return (
        <div className="card card-compact w-[320px] bg-base-100 shadow-md">
            <figure><img className='h-[220px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price} </p>
                <div className="card-actions justify-end">
                    <button onClick={ ()=> addToCard(name,price)} className="btn btn-outline btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;